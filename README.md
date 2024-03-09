# @dancuba/strutils

This package provides utility functions for string manipulation in JavaScript/TypeScript.

## Installation

```bash
npm install @dancuba/strutils
```

## Usage

- Importing the entire module

```ts
import strUtils from "@dancuba/strutils";

const trimmed = strUtils.trimWhitespace("  example  ");
console.log(trimmed); // Output: 'example'

const camelCased = strUtils.camelCase("hello world");
console.log(camelCased); // Output: 'helloWorld'
```

- Importing a single function

```ts
import { repeat } from "@dancuba/strutils";

const repeated = repeat("Hello", 3);

console.log(repeated); // Output: 'HelloHelloHello'
```

For a full list of available functions and their descriptions, please refer to the documentation.

## License

This package is licensed under the MIT License. See the LICENSE file for details.
