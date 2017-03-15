import { Client } from '../Models/Persistents/Client'

export interface IClientRepository {

    getAll():Promise<Array<Client>>;

    getList(name:string, limit:number, offset:number):Promise<Array<Client>>;
    
    getById(id:string):Promise<Client>;

    save(client:Client):Promise<void>;

    authenticate(clientId:string, clientSecret:string):Promise<boolean>;
}