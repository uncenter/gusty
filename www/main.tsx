import * as path from "jsr:@std/path";

import { createPreset } from "@gusty/preset";
import Page from "./index.tsx";

import { Hono } from "hono";
const app = new Hono();

const stylesheet = createPreset() +
	Deno.readTextFileSync(path.join(import.meta.dirname!, "styles.css"));

app.get("/styles.css", (c) => c.text(stylesheet));
app.get("/", (c) => c.html(<Page />));

Deno.serve(app.fetch);
