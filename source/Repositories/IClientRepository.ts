import { Client } from '../Models/Persistents/Client'

/**
 * Represents a client repository to persists clients.
 */
export interface IClientRepository {
    /**
     * Return a client instance by the given client id.
     * @param clientId Represents the id of the client to look for.
     */
    getById(clientId:string):Promise<Client>;
}