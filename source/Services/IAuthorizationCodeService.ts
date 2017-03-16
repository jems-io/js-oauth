import { Client } from "../Models/Persistents/Client";
import { AuthorizationCode } from "../Models/Persistents/AuthorizationCode";

/**
 * Represents an authorization code service that can generate and validate codes.
 */
export interface IAuthorizationCodeService {

    /**
     * Validate if the given code is valid based on the given client.
     * @param code Represents the code to validate.
     * @param client Represents a client instance to validate the code.
     */
    validateCode(code:string, client:Client):Promise<void>;

    /**
     * Returns an authorization code instance by the given code.
     * @param clientId Represents the clientId that own the code.
     * @param state Represents the state of the code.
     */
    generateCode(clientId:string, state:string):Promise<AuthorizationCode>;

    /**
     * Associate a token to an existing authorization code.
     * @param code Represents the code of the authorization code which the token will be associated.
     * @param token Represents the token that will be associated to the authorization code. 
     */
    associateToken(code:string, token:string):Promise<void>;
}