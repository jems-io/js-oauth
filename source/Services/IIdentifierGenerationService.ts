/**
 * Represents a token generation service to generate tokens.
 */
export interface IIdentifierGenerationService {

    /**
     * Returns a new ramdom token value;
     */
    getTokenValue():Promise<string>;

    /**
     * Returns a new ramdom authorization code value;
     */
    getAuthorizationCodeValue():Promise<string>;
}