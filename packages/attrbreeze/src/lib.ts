import type * as CSS from "./css.ts";

export function type(syntax: CSS.DataTypeSyntax): CSS.Type {
	return `type(${syntax})`;
}

export function attr(name: string, type: CSS.Type): string {
	return `attr(${name} ${type})`;
}

export function prop(name: string, value: string): string {
	return `${name}: ${value};`;
}

export function declaration(
	attribute: string,
	property: string | string[],
	type: CSS.Type,
) {
	const value = attr(attribute, type);
	return `[${attribute}] {` +
		(Array.isArray(property) ? property : [property]).map((p) =>
			prop(p, value)
		).join("") + `}`;
}

export type Declaration = [string | string[], CSS.Type];
