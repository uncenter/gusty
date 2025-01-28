export namespace CSS {
	/**
	 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#local_font-relative_lengths MDN}
	 */
	export type LocalFontRelativeLength =
		| "cap"
		| "ch"
		| "em"
		| "ex"
		| "ic"
		| "lh";
	/**
	 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#root_font-relative_lengths MDN}
	 */
	export type RootFontRelativeLength =
		| "rcap"
		| "rch"
		| "rem"
		| "rex"
		| "ric"
		| "rlh";
	/**
	 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#viewport_units MDN}
	 */
	export type ViewportUnit =
		| "dvh"
		| "dvw"
		| "lvh"
		| "lvw"
		| "svh"
		| "svw"
		| "vb"
		| "vh"
		| "vi"
		| "vmax"
		| "vmin"
		| "vw";
	/**
	 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#container_units MDN}
	 */
	export type ContainerUnit =
		| "cqb"
		| "cqh"
		| "cqi"
		| "cqmax"
		| "cqmin"
		| "cqw";
	/**
	 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#distance_units MDN}
	 */
	export type AbsoluteUnit = "cm" | "in" | "mm" | "pc" | "pt" | "px" | "Q";
	export type DistanceUnit =
		| AbsoluteUnit
		| LocalFontRelativeLength
		| RootFontRelativeLength
		| ViewportUnit
		| ContainerUnit;

	export type DataType =
		| "angle"
		| "color"
		| "custom-ident"
		| "image"
		| "integer"
		| "length"
		| "length-percentage"
		| "number"
		| "percentage"
		| "resolution"
		| "string"
		| "time"
		| "transform-function";
}
