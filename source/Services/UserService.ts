import { User } from '../Models/Persistents/User'
import { IUserService } from './IUserService'
import { IUserRepository } from '../Repositories/IUserRepository'

/**
 * Represent an user service.
 */
export class UserService implements IUserService {
    
    private _userRepository:IUserRepository;

    /**
     * Create a new instance of the user service with tha given repository.
     * @param userRepository Represet the repository to interact with the data.
     */
    constructor(userRepository:IUserRepository) {
        this._userRepository = userRepository;
    }

    /**
     * Get a boolean value specifying if the user credential are valid.
     * @param username Represents the user name.
     * @param password Represents the user password.
     */ 
    public async validateCredentials(username: string, password: string): Promise<boolean> {
        
        let user:User = await this._userRepository.getByName(username);

        return user && user.password === password;
    }
}