import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { denoImage, fs } from "deps.ts";

async function getFilePaths(directory: string): Promise<Set<string>> {
  if (directory.startsWith("./")) {
    directory = directory.substring(2);
  }
  const filePaths = new Set<string>();
  for await (const entry of fs.walk(directory)) {
    if (entry.isFile) {
      filePaths.add(entry.path.substring(directory.length));
    }
  }
  return filePaths;
}

const staticFiles = await getFilePaths("static");

function isStaticFile(pathname: string): boolean {
  return staticFiles.has(pathname);
}

async function resizeImage(
  filePath: string,
  width: number,
  height: number,
) {
  const file = await Deno.readFile(filePath);
  const image = await denoImage.resize(file, {
    width,
    height,
  });
  return image;
}

export async function handler(
  request: Request,
  ctx: MiddlewareHandlerContext,
) {
  const url = new URL(request.url);
  if (isStaticFile(url.pathname)) {
    if (url.pathname.endsWith(".png") || url.pathname.endsWith(".jpg")) {
      return new Response(
        await resizeImage(
          `static${url.pathname}`,
          Number(url.searchParams.get("width")) || 0,
          Number(url.searchParams.get("height")) || 0,
        ),
        {
          headers: {
            "Content-Type": url.pathname.endsWith(".png")
              ? "image/png"
              : "image/jpeg",
          },
        },
      );
    }
  }
  const response = await ctx.next();
  return response;
}
