const { CodedError } = require('.');

const err = new CodedError('An error has occurred', 127, { foo: 'bar' });

console.log(err);
