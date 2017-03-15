/**
 * Represents a token generation service to generate tokens.
 */
export interface ITokenGenerationService {

    /**
     * Get a new ramdom token value;
     */
    getTokenValue():Promise<string>;
}