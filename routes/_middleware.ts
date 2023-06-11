import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(
  request: Request,
  ctx: MiddlewareHandlerContext,
) {
  const response = await ctx.next();

  return response;
}
