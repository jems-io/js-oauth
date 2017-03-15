import { ITokenGenerationService } from './ITokenGenerationService' 

/**
 * Represents a token generation service to generate tokens.
 */
export class TokenGenerationService implements ITokenGenerationService {

    /**
     * Get a new ramdom token value;
     */
    public async getTokenValue():Promise<string> {
        return 'sdhbfhksbdjkfbsbgbsjfkabghkbf';
    }
}