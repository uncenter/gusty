import type { AttrType } from "./helpers.ts";
import { mkAttributeDeclarationBlock } from "./lib.ts";

/**
 * Gusty configuration options.
 */
export type GustyOptions = {
	attributes: GustyAttributes;
};

/**
 * Generate a Gusty stylesheet from provided attributes.
 */
export function createGustyStylesheet(options: GustyOptions): string {
	return Object.entries(options.attributes)
		.map(([attribute, [prop, type]]) =>
			mkAttributeDeclarationBlock(attribute, prop, type)
		)
		.join("");
}

// export { alias, type, unit } from "./helpers.ts";

/**
 * Gusty attribute definition.
 *
 * The first element can be a single property (`string`) or an array of properties (`string[]`) to set the value on.
 * The second element, which specifies the {@link AttrType CSS data type or unit} to parse the attribute into.
 */
export type GustyAttribute = [
	string | string[],
	AttrType,
];
/**
 * Map of attribute names to attribute defintions.
 */
export type GustyAttributes = Record<
	string,
	GustyAttribute
>;
