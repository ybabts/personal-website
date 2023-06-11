#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";

import twindIntellisense from "./src/twind-intellisense.ts";

twindIntellisense();

await dev(import.meta.url, "./main.ts");
