/**
 * Represents a base token.
 */
export abstract class BaseToken {
    
    /**
     * Get or set the value of the token.
     */
    public value:string;

    /**
     * The time in seconds to the token expiration.
     */
    public expireIn:number;
}