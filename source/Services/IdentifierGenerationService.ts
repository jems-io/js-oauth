import randomstring = require("randomstring")
import { OAuthContext } from "../OAuthContext";
import { IIdentifierGenerationService } from "./IIdentifierGenerationService";

/**
 * Represents a identifier generation service to generate tokens and authorization codes.
 */
export class IdentifierGenerationService implements IIdentifierGenerationService {
    
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
        return randomstring.generate(this._oAuthContext.configuration.tokenLength | 30);
    }

    /**
     * Returns a new ramdom authorization code value;
     */
    public async getAuthorizationCodeValue(): Promise<string> {
        return randomstring.generate(this._oAuthContext.configuration.authorizationCodeLength | 10);
    }
}