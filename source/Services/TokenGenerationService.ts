import randomstring = require("randomstring")

import { ITokenGenerationService } from './ITokenGenerationService' 
import { OAuthContext } from "../OAuthContext";

/**
 * Represents a token generation service to generate tokens.
 */
export class TokenGenerationService implements ITokenGenerationService {
    
    private _oAuthContext:OAuthContext;
    
    /**
     * Create a new instance of the token generation service.
     * @param oAuthContext Represents the OAuth context that containing the default configurations for common objects.
     */
    constructor(oAuthContext:OAuthContext) {
        this._oAuthContext = oAuthContext;
    }

    /**
     * Returns a new ramdom token value;
     */
    public async getTokenValue():Promise<string> {
        return randomstring.generate(this._oAuthContext.configuration.tokenLength | 20);
    }
}