type Bracketed<T extends string> = `<${T}>`;

type DataTypeName =
	| "absolute-size"
	| "alpha-value"
	| "angle-percentage"
	| "angle"
	| "baseline-position"
	| "basic-shape"
	| "blend-mode"
	| "box-edge"
	| "calc-keyword"
	| "calc-sum"
	| "color-interpolation-method"
	| "color"
	| "content-distribution"
	| "content-position"
	| "custom-ident"
	| "dashed-ident"
	| "dimension"
	| "display-box"
	| "display-inside"
	| "display-internal"
	| "display-legacy"
	| "display-listitem"
	| "display-outside"
	| "easing-function"
	| "filter-function"
	| "flex"
	| "frequency-percentage"
	| "frequency"
	| "generic-family"
	| "gradient"
	| "hex-color"
	| "hue-interpolation-method"
	| "hue"
	| "ident"
	| "image"
	| "integer"
	| "length-percentage"
	| "length"
	| "line-style"
	| "named-color"
	| "number"
	| "overflow-position"
	| "overflow"
	| "percentage"
	| "position-area"
	| "position"
	| "ratio"
	| "relative-size"
	| "resolution"
	| "self-position"
	| "shape"
	| "string"
	| "system-color"
	| "time-percentage"
	| "time"
	| "transform-function"
	| "url";

export type TypeSyntax =
	| Bracketed<DataTypeName>
	| `${Bracketed<DataTypeName>} | ${Bracketed<DataTypeName>}`;

export type AttrType = `type(${TypeSyntax})`;

export type Property = string;
export type Properties = string[];

export type AttributeDefinition = [
	Property | Properties,
	AttrType,
];
export type AttributeDefinitions = Record<
	string,
	AttributeDefinition
>;
