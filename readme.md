# **@carnesen/coded-error**

An `Error` class with additional properties "code" and "data"

[![build status badge](https://github.com/carnesen/coded-error/workflows/test/badge.svg)](https://github.com/carnesen/coded-error/actions?query=workflow%3Atest+branch%3Amaster) [![npm version badge](https://badge.fury.io/js/%40carnesen%2Fcoded-error.svg)](https://www.npmjs.com/package/@carnesen/coded-error) [![github stars badge](https://img.shields.io/github/stars/carnesen/coded-error)](https://github.com/carnesen/coded-error)

## Install

```
$ npm install @carnesen/coded-error
```
This package includes runtime JavaScript files (ES2015) and the corresponding TypeScript type declarations.

## Usage

```typescript
import { CodedError } from '@carnesen/coded-error';

const err = new CodedError('An error has occurred', 127, { foo: 'bar' });

console.log(err);
/*
{ CodedError: An error has occurred
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
The constructor signature is:
```typescript
new CodedError(message: string, code: any, data: any);
```
This creates an object with properties `message`, `code`, and `data`. Besides that there's not much to know!

## More information
If you encounter any bugs or have any questions or feature requests, please don't hesitate to file an issue or submit a pull request on [this project's repository on GitHub](https://github.com/carnesen/coded-error).

## License

MIT © [Chris Arnesen](https://www.carnesen.com)
