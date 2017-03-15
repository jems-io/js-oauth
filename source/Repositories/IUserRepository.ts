import { User } from '../Models/Persistents/User'

export interface IUserRepository {

    getAll():Promise<Array<User>>;

    getList(name:string, limit:number, offset:number):Promise<Array<User>>;
    
    getById(id:string):Promise<User>;

    save(client:User):Promise<void>;
}