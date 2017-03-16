import { IClientRepository } from "../Repositories/IClientRepository";
import { Client } from "../Models/Persistents/Client";
import { IClientService } from "./IClientService";
import { OAuthError } from "../OAuthError";

/**
 * Represents a client service.
 */
export class ClientService implements IClientService {

    private _clientRepository:IClientRepository;

    /**
     * Create a new instance of client service.
     * @param clientRepository Represents a client repository to consult clients.
     */
    constructor(clientRepository:IClientRepository) {
        this._clientRepository = clientRepository;
    }

    /**
     * Validate the credentials of the client.
     * @param clientId Represents the id of the client to authenticate.
     * @param clientSecret Represents the secret of the client to authenticate.
     */
    public async validateCredentials(clientId:string, clientSecret:string):Promise<void> {

        let client:Client = await this._clientRepository.getById(clientId);

        if (client && client.clientSecret === clientSecret) {
            throw new OAuthError('TODO:PutCode', 'The provided client credentials are invalid.');
        };
    }
}