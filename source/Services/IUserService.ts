/**
 * Represent an user service.
 */
export interface IUserService {
    /**
     * Get a boolean value specifying if the user credential are valid.
     * @param username Represents the user name.
     * @param password Represents the user password.
     */ 
    validateCredential(username:string, password:string):Promise<boolean>;
}