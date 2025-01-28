import { createGustyStylesheet, type GustyAttributes } from "@gusty/core";
import { alias, type } from "@gusty/core/helpers";

const SIZE = type(["length", "percentage"]);
const IDENT = type("custom-ident");
const COLOR = type("color");

export const defaultAttributes: GustyAttributes = {
	/* Font */
	"font-family": ["font-family", IDENT],
	"font-size": ["font-size", SIZE],

	...alias(["color", "text"], ["color", COLOR]),
	...alias(["background-color", "bg"], ["background-color", COLOR]),
	"fill": ["fill", COLOR],

	/* Alignment */
	"align-items": ["align-items", IDENT],
	"justify-content": ["justify-content", IDENT],

	...alias(["align-text", "text-align"], ["text-align", IDENT]),

	/* Sizing */
	...alias(["width", "w"], ["width", SIZE]),
	...alias(["max-width", "max-w"], ["max-width", SIZE]),

	...alias(["height", "h"], ["height", SIZE]),
	...alias(["max-height", "max-h"], ["max-height", SIZE]),

	"size": [["width", "height"], SIZE],

	/* Spacing */

	"px": [["padding-left", "padding-right"], SIZE],
	"py": [["padding-top", "padding-bottom"], SIZE],
	...alias(["padding-left", "pl"], ["padding-left", SIZE]),
	...alias(["padding-right", "pr"], ["padding-right", SIZE]),
	...alias(["padding-top", "pt"], ["padding-top", SIZE]),
	...alias(["padding-bottom", "pb"], ["padding-bottom", SIZE]),
	...alias(["padding", "p"], ["padding", SIZE]),

	"mx": [["margin-left", "margin-right"], SIZE],
	"my": [["margin-top", "margin-bottom"], SIZE],
	...alias(["margin-left", "ml"], ["margin-left", SIZE]),
	...alias(["margin-right", "mr"], ["margin-right", SIZE]),
	...alias(["margin-top", "mt"], ["margin-top", SIZE]),
	...alias(["margin-bottom", "mb"], ["margin-bottom", SIZE]),
	...alias(["margin", "m"], ["margin", SIZE]),

	/* Other */
	"border-radius": ["border-radius", SIZE],
	"display": ["display", IDENT],
};

export function createPreset(options: PresetOptions = {}) {
	return createGustyStylesheet({
		attributes: {
			/* Font */
			"font-family": ["font-family", IDENT],
			"font-size": ["font-size", SIZE],

			...alias(["color", "text"], ["color", COLOR]),
			...alias(["background-color", "bg"], ["background-color", COLOR]),
			"fill": ["fill", COLOR],

			/* Alignment */
			"align-items": ["align-items", IDENT],
			"justify-content": ["justify-content", IDENT],

			...alias(["align-text", "text-align"], ["text-align", IDENT]),

			/* Sizing */
			...alias(["width", "w"], ["width", SIZE]),
			...alias(["max-width", "max-w"], ["max-width", SIZE]),

			...alias(["height", "h"], ["height", SIZE]),
			...alias(["max-height", "max-h"], ["max-height", SIZE]),

			"size": [["width", "height"], SIZE],

			/* Spacing */

			"px": [["padding-left", "padding-right"], SIZE],
			"py": [["padding-top", "padding-bottom"], SIZE],
			...alias(["padding-left", "pl"], ["padding-left", SIZE]),
			...alias(["padding-right", "pr"], ["padding-right", SIZE]),
			...alias(["padding-top", "pt"], ["padding-top", SIZE]),
			...alias(["padding-bottom", "pb"], ["padding-bottom", SIZE]),
			...alias(["padding", "p"], ["padding", SIZE]),

			"mx": [["margin-left", "margin-right"], SIZE],
			"my": [["margin-top", "margin-bottom"], SIZE],
			...alias(["margin-left", "ml"], ["margin-left", SIZE]),
			...alias(["margin-right", "mr"], ["margin-right", SIZE]),
			...alias(["margin-top", "mt"], ["margin-top", SIZE]),
			...alias(["margin-bottom", "mb"], ["margin-bottom", SIZE]),
			...alias(["margin", "m"], ["margin", SIZE]),

			/* Other */
			"border-radius": ["border-radius", SIZE],
			"display": ["display", IDENT],
		},
	});
}

export type PresetOptions = Record<string, never>;
