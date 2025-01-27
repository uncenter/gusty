import type * as CSS from "./css.ts";

function attr(name: string, type: CSS.Type) {
	return `attr(${name} type(<${type}>))`;
}

function declaration(attribute: string, prop: string, type: CSS.Type) {
	return `[${attribute}] {
	${prop}: ${attr(attribute, type)};
}
`;
}

const declarations = {
	display: ["display", "custom-ident"],
	text: ["color", "color"],
	color: ["color", "color"],
	bg: ["background-color", "color"],
} as Record<string, [string, CSS.Type]>;

export function attrbreeze() {
	let output = "";
	for (const [attribute, [prop, type]] of Object.entries(declarations)) {
		output += declaration(attribute, prop, type);
	}
	return output;
}
