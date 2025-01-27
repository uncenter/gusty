import { DECLARATIONS } from "./decls.ts";
import { type Declaration, declaration } from "./lib.ts";

export function attrbreeze(options: AttrbreezeOptions = {
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

export type AttrbreezeOptions = {
	declarations: AttrbreezeDeclarations;
};

export type AttrbreezeDeclarations = Record<string, Declaration>;
