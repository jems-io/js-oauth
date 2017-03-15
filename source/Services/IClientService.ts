/**
 * Represents a client service.
 */
export interface ICLientService {
    /**
     * Return a boolean value specifying if a client exists with the given id.
     * @param clientId Represents the id of the client to look for.
     */
    existsClient(clientId:string):Promise<boolean>;

    /**
     * Return a boolean value specifying if the given credentials are valis.
     * @param clientId Represents the id of the client to authenticate.
     * @param clientSecret Represents the secret of the client to authenticate.
     */
    validateCredentials(clientId:string, clientSecret:string):Promise<boolean>;
}