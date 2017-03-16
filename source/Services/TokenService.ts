import { Token } from '../Models/Persistents/Token'
import { ITokenService } from './ITokenService'
import { ITokenRepository } from '../Repositories/ITokenRepository'
import { OAuthContext } from '../OAuthContext'
import { RefreshToken } from "../Models/Persistents/RefreshToken";
import { IIdentifierGenerationService } from './IIdentifierGenerationService'

/**
 * Represents a token service.
 */
export class TokenService implements ITokenService {    

    private _tokenRepository:ITokenRepository;
    private _tokenGenerationService:IIdentifierGenerationService;
    private _oAuthContext:OAuthContext;

    /**
     * Create a new instance of the token service.
     * @param tokenRepository Represents the token repository to consult and persist tokens.
     * @param tokenGenerationService Represents the token generation service to generate tokens values.
     * @param oAuthContext Represents the OAuth context that containing the default configurations for common objects.
     */    
    constructor(tokenRepository:ITokenRepository
               ,tokenGenerationService:IIdentifierGenerationService
               ,oAuthContext:OAuthContext) {

        this._tokenRepository = tokenRepository;
        this._tokenGenerationService = tokenGenerationService;
        this._oAuthContext = oAuthContext;
    }

    /**
     * Returns a token intance by the given value.
     * @param tokenValue Represents the token value to look for.
     */
    public async getByValue(tokenValue:string):Promise<Token> {
        return await this._tokenRepository.getByValue(tokenValue);        
    }

    /**
     * Returns a new generated token.
     */
    public async generateToken():Promise<Token> {

        let newToken:Token = new Token(); 
        newToken.value = await this._tokenGenerationService.getTokenValue();
        newToken.expireIn = this._oAuthContext.configuration.tokenExpirationTime;

        if (this._oAuthContext.configuration.mustGenerateRefreshToken) {
            newToken.refreshToken = new RefreshToken();
            newToken.refreshToken.value = await this._tokenGenerationService.getTokenValue();
            newToken.refreshToken.expireIn = this._oAuthContext.configuration.refreshTokenExpirationTime;       
        }
        
        await this._tokenRepository.save(newToken);

        return newToken;
    }    
}