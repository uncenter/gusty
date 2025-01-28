import type { AttrType } from "./helpers.ts";

export function mkAttr(name: string, type: AttrType): string {
	return `attr(${name} ${type})`;
}

export function mkDecl(property: string, value: string): string {
	return `${property}: ${value};`;
}

export function mkAttributeDeclarationBlock(
	attribute: string,
	property: string | string[],
	type: AttrType,
) {
	const value = mkAttr(attribute, type);
	const properties = Array.isArray(property) ? property : [property];
	const declarations = properties.map((p) => mkDecl(p, value)).join("");
	return `[${attribute}]{${declarations}}`;
}
