import type * as CSS from "./types.ts";

export function mkType(syntax: CSS.TypeSyntax): CSS.AttrType {
	return `type(${syntax})`;
}

export function mkAttr(name: string, type: CSS.AttrType): string {
	return `attr(${name} ${type})`;
}

export function mkDecl(property: string, value: string): string {
	return `${property}: ${value};`;
}

export function mkAttributeDeclarationBlock(
	attribute: string,
	property: string | string[],
	type: CSS.AttrType,
) {
	const value = mkAttr(attribute, type);
	const properties = Array.isArray(property) ? property : [property];
	const declarations = properties.map((p) => mkDecl(p, value)).join("");
	return `[${attribute}]{${declarations}}`;
}
