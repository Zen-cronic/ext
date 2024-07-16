# exty

## What

A curried library to check the extension of a file, including extension-less and dotfiles.

## Why?

To replace repetitive checks using `path.extname` or  `String.endsWith` or a regex pattern. 

## Example

- Functions for identifying `.js`, `.ts`, and `.json` files come right out of the box:

```javascript
import { isJS, isTS, isJSON } from "exty";

const jsPath = "../index.js";
const tsPath = "./index.ts";
const jsonPath = "/home/user/project/package.json";

isJS(jsPath); //true
isTS(tsPath); //true
isJSON(jsonPath); //true
```

- Or you can create your own checkers:

```javascript
import { isExtFactory } from "exty";

const isEnvLocal = isExtFactory(".env.local");

const envLocalPath = "../.env.local";
const envPath = "./.env";

isEnvLocal(envLocalPath); //true
isEnvLocal(envPath); //false
```


## Installation

`$ npm install exty`

## Dependencies

- **0 javascript/nodejs dependency!**

## Test

`$ npm test`
