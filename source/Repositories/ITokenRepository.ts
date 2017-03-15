import { Token } from '../Models/Persistents/Token'

export interface IUserRepository {

    getAll():Promise<Array<Token>>;

    getList(name:string, limit:number, offset:number):Promise<Array<Token>>;
    
    getById(id:string):Promise<Token>;

    save(client:Token):Promise<void>;
}