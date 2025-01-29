# `@gusty/core`

[![JSR](https://jsr.io/badges/@gusty/core)](https://jsr.io/@gusty/core) [![JSR Score](https://jsr.io/badges/@gusty/core/score)](https://jsr.io/@gusty/core)

A minimal atomic CSS stylesheet generator using dynamic utility attributes.

## Installation

```
deno add jsr:@gusty/core
```

## Usage

```ts
import { createGustyStylesheet } from "@gusty/core";
import { type } from "@gusty/core/helpers";

const myStylesheet: string = createGustyStylesheet({
	attributes: {
		"color": ["color", type("color")],
	},
});
```

### Helpers

Gusty provides helper functions that should be used to create Gusty stylesheets.

#### `type`

#### `unit`

#### `alias`
