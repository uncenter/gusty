import type { AttributeDefinitions } from "./types.ts";

import { attributes } from "./attrs.ts";
import { mkAttributeDeclarationBlock } from "./lib.ts";

export function gusty(options: GustyOptions = {
	attributes,
}) {
	return Object.entries(options.attributes)
		.map(([attribute, [prop, type]]) =>
			mkAttributeDeclarationBlock(attribute, prop, type)
		)
		.join("");
}

export type GustyOptions = {
	attributes: AttributeDefinitions;
};
