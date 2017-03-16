/**
 * Represents a client service.
 */
import { Client } from "../Models/Persistents/Client";

export interface IClientService {
    /**
     * Validate the credentials of the client.
     * @param clientId Represents the id of the client to authenticate.
     * @param clientSecret Represents the secret of the client to authenticate.
     */
    validateCredentials(clientId:string, clientSecret:string):Promise<void>;
}