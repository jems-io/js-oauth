import { Client } from "./Client";
import { Token } from "./Token";

/**
 * Represents an authorization code.
 */
export class AuthorizationCode {
    /**
     * Get or set the code.
     */
    public code:string;

    /**
     * Get or set the client that generate the code.
     */
    public client:Client;

    /**
     * Get or set the state of the code.
     */
    public state:string;

    /**
     * Get or set the token generated with the coded;
     */
    public token:Token;

    /**
     * Get or set the date when the code was created.
     */
    public creationDate:Date;
}