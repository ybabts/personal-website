import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Navigation from "../islands/navigation.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato"
        />
        <style>
          {`
            body {
              font-family: 'Lato', sans-serif;
              }
          `}
        </style>
      </Head>
      <Navigation />
      <title>Default Title</title>
      <Component />
    </>
  );
}
