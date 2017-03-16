import { AuthorizationCode } from '../Models/Persistents/AuthorizationCode'

/**
 * Represents a authorization code repository to persists authorization codes.
 */
export interface IAuthorizationCodeRepository {

    /**
     * Returns an authorization code by the given code.
     * @param code Represents the code to look for.
     */
    getByCode(code:string):Promise<AuthorizationCode>;

    /**
     * Save or update authorization code instances.
     * @param authorization Represents the authorization code instance that will be saved or updated.
     */
    save(authorizationClient:AuthorizationCode):Promise<void>;
}