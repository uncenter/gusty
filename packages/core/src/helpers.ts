/**
 * This module contains helper functions for creating Gusty attribute definitions.
 * @module
 */

import type { CSS } from "./css.d.ts";
import type { GustyAttribute, GustyAttributes } from "./mod.ts";

/**
 * Alias additional attribute names to the same definition.
 *
 * @param aliases Additional attribute names to alias the definition to.
 * @param definition An attribute definition.
 * @returns Gusty attribute definition set.
 *
 * @example
 * ```ts
 * let attributes = {
 *   foo: ['padding', unit('rem')],
 *   ...alias(['bar', 'baz'], ['padding', unit('px')]),
 * };
 * ```
 */
export function alias(
	aliases: string[],
	definition: GustyAttribute,
): GustyAttributes {
	return Object.fromEntries(aliases.map((alias) => [alias, definition]));
}

/**
 *  Specifies the unit a numeric value should have (if any). It can be the `%` character (percentage) or a {@link CSS.DistanceUnit CSS distance unit} such as `px`, `rem`, `deg`, `s`, etc.
 * @param unit
 * @returns
 */
export function unit(unit: AttrUnit): AttrUnit {
	return unit;
}

type Bracketed<T extends string> = `<${T}>`;
export type DataTypeSyntax =
	| Bracketed<CSS.DataType>
	| `${Bracketed<CSS.DataType>} | ${Bracketed<
		CSS.DataType
	>}`;

export function type(
	syntaxes: CSS.DataType | CSS.DataType[],
): AttrTypeFn {
	syntaxes = Array.isArray(syntaxes) ? syntaxes : [syntaxes];
	return `type(${syntaxes.map((syntax) => `<${syntax}>`).join(
		"|",
	) as DataTypeSyntax})`;
}

/**
 * Specifies how the attribute value is parsed into a CSS value. This can be the `string` keyword, a `type()` function, or a CSS dimension unit. When omitted, it defaults to `string`.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/attr#attr-type MDN}
 */
export type AttrType =
	| "string"
	| AttrTypeFn
	| AttrUnit;

type AttrTypeFn = `type(${DataTypeSyntax})`;
type AttrUnit = "%" | CSS.DistanceUnit;
