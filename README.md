
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]

TODO: add test passing badge like this ->
[![ci](https://github.com/kelektiv/node.bcrypt.js/actions/workflows/ci.yaml/badge.svg)](https://github.com/kelektiv/node.bcrypt.js/actions/workflows/ci.yaml)


[npm-downloads-image]: https://badgen.net/npm/dy/bcrypt-inzi
[npm-url]: https://npmjs.org/package/bcrypt-inzi
[github-url]: https://npmjs.org/package/bcrypt-inzi
[npm-version-image]: https://badgen.net/npm/v/bcrypt-inzi

# What is Bcrypt

Bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher

It is ideal for convert password into hash when saving in database, Besides incorporating a salt to protect against **Rainbow table attacks**, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to **brute-force search attacks** even with increasing computation power.

This library makes it easier to use Bcrypt in NodeJS

## Installation

```bash
npm i bcrypt-inzi
```

## ES6 Usage

```js
import { stringToHash, verifyHash, validateHash } from "bcrypt-inzi";

const hash = await stringToHash("pakistan", 10);
console.log("hash: ", hash);

const result = await verifyHash(
  "pakistan",
  "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW"
);
if (result) {
  console.log("hash matched");
} else {
  console.log("hash not matched");
}
```

## ES5 Usage:

```js
var bcrypt = require("bcrypt-inzi");

bcrypt.stringToHash("pakistan").then((string) => {
  console.log("hash: ", string);
});

bcrypt
  .varifyHash(
    "pakistan",
    "$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW"
  )
  .then((result) => {
    if (result) {
      console.log("matched");
    } else {
      console.log("not matched");
    }
  })
  .catch((e) => {
    console.log("error: ", e);
  });

bcrypt
  .validateHash("$2a$10$W3/bbpG0rexRwKBabxbp7efehubSnxDLM7OCEj0MEPAac98EUa9mW")
  .then((result) => {
    if (result) {
      console.log("hash is valid");
    } else {
      console.log("hash is invalid");
    }
  });
```

<br>

|             |                                                                          |
| ----------- | ------------------------------------------------------------------------ |
| Author      | M.Inzamam Malik, [malikasinger@gmail.com](mailto:malikasinger@gmail.com) |
| Contributor | [Shehzad Iqbal](https://github.com/shehza-d)                             |
