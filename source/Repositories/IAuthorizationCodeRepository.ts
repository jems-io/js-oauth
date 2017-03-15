import { AuthorizationCode } from '../Models/Persistents/AuthorizationCode'

export interface IUserRepository {

    getAll():Promise<Array<AuthorizationCode>>;

    getList(name:string, limit:number, offset:number):Promise<Array<AuthorizationCode>>;
    
    getById(id:string):Promise<AuthorizationCode>;

    save(client:AuthorizationCode):Promise<void>;
}