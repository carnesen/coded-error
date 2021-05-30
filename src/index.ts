/**
 * An `Error` class with additional properties "code" and "data"
 */
export class CodedError extends Error {
	public readonly code?: any;

	public readonly data?: any;

	/**
	 * @param message An error message
	 * @param code An error code, typically a string or number
	 * @param data Arbitrary data to attach to the object
	 */
	public constructor(message?: string, code?: any, data?: any) {
		super(message);
		if (typeof code !== 'undefined') {
			this.code = code;
		}
		if (typeof data !== 'undefined') {
			this.data = data;
		}
		if (typeof this.stack === 'string') {
			this.stack = `${this.stack}\n`;
		}
	}
}
