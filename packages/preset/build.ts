import { createPreset } from "./src/mod.ts";

Deno.writeTextFileSync(
	"gusty-preset.css",
	createPreset(),
);
