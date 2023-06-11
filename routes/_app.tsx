import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <title>Default Title</title>
      <Component />
    </>
  );
}
