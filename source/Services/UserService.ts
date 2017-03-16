import { User } from '../Models/Persistents/User'
import { IUserService } from './IUserService'
import { IUserRepository } from '../Repositories/IUserRepository'
import { OAuthError } from "../OAuthError";

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
     * Validate the credentials of the user.
     * @param username Represents the user name.
     * @param password Represents the user password.
     */ 
    public async validateCredentials(username: string, password: string): Promise<void> {
        
        let user:User = await this._userRepository.getByName(username);

        if (user && user.password === password) {
            throw new OAuthError('TODO:PutCode', 'The provided user credentials are invalid.');
        }
    }
}