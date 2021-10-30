# **@carnesen/coded-error** changelog

## Upcoming

- Added: Official support for Node.js v16

- Breaking: Drop official support for Node.js v10

- Internal: Update dev dependencies

## v0.3.0 (2021-05-30)

- Breaking: Remove call Object.setPrototypeOf(this, new.target.prototype). This was a workaround for issues subclassing Error when transpiling to ES5, which we don't support anymore.

- Internal: Update dev dependencies, fix resulting lint errors, update license.

- Internal: Added "instanceof" behavior unit tests.

## 0.2.0 (2020-08-05)

### Breaking

- Drop support for Node.js 8

### Features

- Added TSDoc comments to source code
