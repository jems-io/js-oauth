/**
 * Represents a error in a flow validation.
 */
export class FlowError {

    private _code:string;
    private _message:string;
    
    /**
     * Create a new flow error instance with the given code and message.
     * @param code 
     * @param message 
     */
    constructor(code:string, message:string) {
        this._code = code;
        this._message = message;
    }

    /**
     * Get the error code.
     */
    public get code() { return this._code; }

    /**
     * Get the error message.
     */
    public get message() { return this._message };
}