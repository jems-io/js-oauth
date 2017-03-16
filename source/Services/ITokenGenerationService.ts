/**
 * Represents a token generation service to generate tokens.
 */
export interface ITokenGenerationService {

    /**
     * Returns a new ramdom token value;
     */
    getTokenValue():Promise<string>;
}