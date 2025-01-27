import { type } from "./lib.ts";
import type { GustyDeclarations } from "./mod.ts";

const size = type("<length> | <percentage>");

const spacing: GustyDeclarations = {
	"w": ["width", size],
	"width": ["width", size],
	"max-w": ["max-width", size],
	"max-width": ["max-width", size],

	"h": ["height", size],
	"height": ["height", size],
	"max-h": ["max-height", size],
	"max-height": ["max-height", size],

	"size": [["width", "height"], size],

	"px": [["padding-left", "padding-right"], size],
	"py": [["padding-top", "padding-bottom"], size],
	"pl": ["padding-left", size],
	"pr": ["padding-right", size],
	"pt": ["padding-top", size],
	"pb": ["padding-bottom", size],
	"p": ["padding", size],
	"mx": [["margin-left", "margin-right"], size],
	"my": [["margin-top", "margin-bottom"], size],
	"ml": ["margin-left", size],
	"mr": ["margin-right", size],
	"mt": ["margin-top", size],
	"mb": ["margin-bottom", size],
	"m": ["margin", size],

	"border-radius": ["border-radius", size],
};

const align: GustyDeclarations = {
	"align-items": ["align-items", type("<custom-ident>")],
	"justify-content": ["justify-content", type("<custom-ident>")],

	"text-align": ["text-align", type("<custom-ident>")],
	"align-text": ["text-align", type("<custom-ident>")],
};

const color: GustyDeclarations = {
	"text": ["color", type("<color>")],
	"color": ["color", type("<color>")],
	"fill": ["fill", type("<color>")],
	"bg": ["background-color", type("<color>")],
};

export const DECLARATIONS: GustyDeclarations = {
	"display": ["display", type("<custom-ident>")],
	// TODO: Use (unimplemented?) `<generic-family>` type.
	"font-family": ["font-family", type("<custom-ident>")],
	"font-size": ["font-size", size],

	...color,
	...align,
	...spacing,
};
