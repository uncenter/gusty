import { DECLARATIONS } from "./decls.ts";
import { type Declaration, declaration } from "./lib.ts";

export function gusty(options: GustyOptions = {
	declarations: DECLARATIONS,
}) {
	let output = "";
	for (
		const [attribute, [prop, type]] of Object.entries(options.declarations)
	) {
		output += declaration(attribute, prop, type);
	}
	return output;
}

export type GustyOptions = {
	declarations: GustyDeclarations;
};

export type GustyDeclarations = Record<string, Declaration>;
