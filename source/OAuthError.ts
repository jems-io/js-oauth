/**
 * Represents an OAuth error.
 */
export class OAuthError extends Error {

    private _code:string;

    /**
     * Create a new instance of OAuth error.
     * @param code Represents the code of the error.
     * @param message Represents the message of the error.
     */
    constructor(code:string, message:string) {
        super(message);

        this._code = code;
    }

    /**
     * Get the code of the error.
     */
    public get code() { return this._code; };
}