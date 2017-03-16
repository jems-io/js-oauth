import { User } from '../Models/Persistents/User'

/**
 * Represents an user repository to persists users.
 */
export interface IUserRepository {
    
    /**
     * Returns an user instance by a given name.
     * @param username Represent the user name to look for.
     */
    getByName(username:string):Promise<User>;
}