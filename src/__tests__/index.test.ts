import { CodedError } from '..';

describe('CodedError', () => {
	it('instantiates an object with "message", "code", and "data" properties', () => {
		const err = new CodedError('foo', 'bar', 'baz');
		expect(err.message).toBe('foo');
		expect(err.code).toBe('bar');
		expect(err.data).toBe('baz');
	});

	it('instantiates an object with "stack" property indicating where it was created', () => {
		const err = new CodedError();
		const creationLocationRegExp = /index.test.ts:\d\d/;
		expect(err.stack).toMatch(creationLocationRegExp);
	});

	it('instantiates an object with "name" property "Error"', () => {
		const err = new CodedError();
		expect(err.name).toBe('Error');
	});

	it('has the correct instanceof behavior', () => {
		const err = new CodedError();
		expect(err instanceof CodedError).toBe(true);
		expect(err instanceof Error).toBe(true);
	});
});
