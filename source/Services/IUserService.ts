/**
 * Represent an user service.
 */
export interface IUserService {
    /**
     * Validate the credentials of the user.
     * @param username Represents the user name.
     * @param password Represents the user password.
     */ 
    validateCredentials(username:string, password:string):Promise<void>;
}