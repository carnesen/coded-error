const { CodedError } = require('.');

const err = new CodedError('An error has occurred', 127, { foo: 'bar' });

// eslint-disable-next-line no-console
console.log(err);
