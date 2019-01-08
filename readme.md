# coded-error [![Build Status](https://travis-ci.com/carnesen/coded-error.svg?branch=master)](https://travis-ci.com/carnesen/coded-error)

An enhanced `Error` class with additional properties "code" and "data"

## Install

```
$ npm install @carnesen/coded-error
```
This package includes runtime JavaScript files suitable for Node.js >=8 or a modern non-IE browser as well as the corresponding TypeScript type declarations.

## Usage

```ts
import { CodedError } from '@carnesen/coded-error';

const err = new CodedError('An error has occurred', 127, { foo: 'bar' });

console.log(err);
/*
{ Error: An error has occurred
    at Object.<anonymous> (/Users/carnesen/GitHub/coded-error/example.js:3:13)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Function.Module.runMain (module.js:694:10)
    at startup (bootstrap_node.js:204:16)
    at bootstrap_node.js:625:3
 code: 127, data: { foo: 'bar' } }
*/
```
## API

### new CodedError(message, code, data)

#### message

Type: `string` (optional)

An error message passed into the native `Error` constructor

#### code

Type: `any`

An error code attached to the resulting error object

#### data

Type: `any`

An arbitrary payload attached to the error object as the "data" property

## Why?

This is the "best practice" modern way of creating an Error object with a "code" property, all bundled up in a nice lil 100% tested micropackage.

## Related

- [@carnesen/run-and-exit](https://github.com/carnesen/run-and-exit): Run an async function, `console.log` the resolved/rejected value, and `process.exit`
- [@carnesen/cli](https://github.com/carnesen/cli): A library for building Node.js command-line interfaces

## License

MIT © [Chris Arnesen](https://www.carnesen.com)
