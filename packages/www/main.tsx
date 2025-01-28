import * as path from "jsr:@std/path";

import { Hono } from "hono";
import { gusty } from "@gusty/gusty";

import Page from "./index.tsx";

const app = new Hono();

const stylesheet = gusty() +
	Deno.readTextFileSync(path.join(import.meta.dirname!, "styles.css"));

app.get("/styles.css", (c) => c.text(stylesheet));
app.get("/", (c) => c.html(<Page />));

Deno.serve(app.fetch);
