import { IClientRepository } from "../Repositories/IClientRepository";
import { Client } from "../Models/Persistents/Client";
import { IClientService } from "./IClientService";

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
     * Returns a boolean value specifying if a client exists with the given id.
     * @param clientId Represents the id of the client to look for.
     */
    public async existsClient(clientId:string):Promise<boolean> {

        let client:Client = await this._clientRepository.getById(clientId);

        return client && client.clientId === clientId;
    }

    /**
     * Returns a boolean value specifying if the given credentials are valis.
     * @param clientId Represents the id of the client to authenticate.
     * @param clientSecret Represents the secret of the client to authenticate.
     */
    public async validateCredentials(clientId:string, clientSecret:string):Promise<boolean> {

        let client:Client = await this._clientRepository.getById(clientId);

        return client && client.clientId === clientId && client.clientSecret === clientSecret;
    }
}