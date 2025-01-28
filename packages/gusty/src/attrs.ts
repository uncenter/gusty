import type { AttributeDefinition, AttributeDefinitions } from "./types.ts";

import { mkType } from "./lib.ts";

const SIZE = mkType("<length> | <percentage>");
const IDENT = mkType("<custom-ident>");
const COLOR = mkType("<color>");

export const attributes: AttributeDefinitions = {
	/* Font */
	"font-family": ["font-family", IDENT],
	"font-size": ["font-size", SIZE],

	...mkAliases(["color", "text"], ["color", COLOR]),
	...mkAliases(["background-color", "bg"], ["background-color", COLOR]),
	"fill": ["fill", COLOR],

	/* Alignment */
	"align-items": ["align-items", IDENT],
	"justify-content": ["justify-content", IDENT],

	...mkAliases(["align-text", "text-align"], ["text-align", IDENT]),

	/* Sizing */
	...mkAliases(["width", "w"], ["width", SIZE]),
	...mkAliases(["max-width", "max-w"], ["max-width", SIZE]),

	...mkAliases(["height", "h"], ["height", SIZE]),
	...mkAliases(["max-height", "max-h"], ["max-height", SIZE]),

	"size": [["width", "height"], SIZE],

	/* Spacing */

	"px": [["padding-left", "padding-right"], SIZE],
	"py": [["padding-top", "padding-bottom"], SIZE],
	...mkAliases(["padding-left", "pl"], ["padding-left", SIZE]),
	...mkAliases(["padding-right", "pr"], ["padding-right", SIZE]),
	...mkAliases(["padding-top", "pt"], ["padding-top", SIZE]),
	...mkAliases(["padding-bottom", "pb"], ["padding-bottom", SIZE]),
	...mkAliases(["padding", "p"], ["padding", SIZE]),

	"mx": [["margin-left", "margin-right"], SIZE],
	"my": [["margin-top", "margin-bottom"], SIZE],
	...mkAliases(["margin-left", "ml"], ["margin-left", SIZE]),
	...mkAliases(["margin-right", "mr"], ["margin-right", SIZE]),
	...mkAliases(["margin-top", "mt"], ["margin-top", SIZE]),
	...mkAliases(["margin-bottom", "mb"], ["margin-bottom", SIZE]),
	...mkAliases(["margin", "m"], ["margin", SIZE]),

	/* Other */
	"border-radius": ["border-radius", SIZE],
	"display": ["display", IDENT],
};

export function mkAliases(
	aliases: string[],
	definition: AttributeDefinition,
): AttributeDefinitions {
	return Object.fromEntries(aliases.map((alias) => [alias, definition]));
}
