import type * as CSS from "./css.ts";

const DEFAULT_DECLARATIONS = {
	display: ["display", "custom-ident"],
	text: ["color", "color"],
	color: ["color", "color"],
	bg: ["background-color", "color"],
} as Record<string, [string, CSS.Type]>;

export function attrbreeze(options: AttrbreezeOptions = {
	declarations: DEFAULT_DECLARATIONS,
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

export type AttrbreezeDeclarations = Record<string, [string, CSS.Type]>;

function attr(name: string, type: CSS.Type) {
	return `attr(${name} type(<${type}>))`;
}

function declaration(attribute: string, prop: string, type: CSS.Type) {
	return `[${attribute}] {
	${prop}: ${attr(attribute, type)};
}
`;
}
