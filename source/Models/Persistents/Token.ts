import { BaseToken } from './BaseToken'
import { Client } from "./Client";

/**
 * Represents a token.
 */
export class Token extends BaseToken {

    /**
     * Get or set the client that generate the token;
     */
    public client:Client;
    
    /**
     * Get or set the refresh token information.
     */
    public refreshToken:BaseToken;
}