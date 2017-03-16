import { Client } from "../Models/Persistents/Client";
import { AuthorizationCode } from "../Models/Persistents/AuthorizationCode";
import { IAuthorizationCodeService } from "./IAuthorizationCodeService";
import { IAuthorizationCodeRepository } from "../Repositories/IAuthorizationCodeRepository";
import { ITokenRepository } from "../Repositories/ITokenRepository";
import { Token } from "../Models/Persistents/Token";
import { OAuthError } from "../OAuthError";
import { IClientService } from "./IClientService";
import { IClientRepository } from "../Repositories/IClientRepository";
import { IIdentifierGenerationService } from "./IIdentifierGenerationService";

/**
 * Represents an authorization code service that can generate and validate codes.
 */
export class AuthorizationCodeService implements IAuthorizationCodeService {
    
    private _authorizarionCodeRepository:IAuthorizationCodeRepository;
    private _tokenRepository:ITokenRepository;
    private _clientService:IClientService;
    private _clientRepository:IClientRepository;
    private _identifierGenerationService:IIdentifierGenerationService;
    
    constructor(authorizarionCodeRepository:IAuthorizationCodeRepository
               ,tokenRepository:ITokenRepository
               ,clientService:IClientService
               ,clientRepository:IClientRepository
               ,identifierGenerationService:IIdentifierGenerationService) {

                this._authorizarionCodeRepository = authorizarionCodeRepository;
                this._tokenRepository = tokenRepository;
                this._clientService = clientService;
                this._clientRepository = clientRepository;
                this._identifierGenerationService = identifierGenerationService;
    }

    /**
     * Validate if the given code is valid based on the given client.
     * @param code Represents the code to validate.
     * @param client Represents a client instance to validate the code.
     */
    public async validateCode(code:string, client:Client):Promise<void> {
        
        let authorizationCode:AuthorizationCode = await this._authorizarionCodeRepository.getByCode(code);

        if (!authorizationCode)
            throw new OAuthError('TODO:PutCode', 'The provided authorization code do not exists');

        if (!client)
            throw new OAuthError('TODO:PutCode', 'A client must be provided.');
        
        this._clientService.validateCredentials(client.clientId, client.clientSecret);

        if (client.clientId != authorizationCode.client.clientId)
            throw new OAuthError('TODO:PutCode', 'The client is unauthorized to exhange the provided code.');
    }

    /**
     * Returns an authorization code instance by the given code.
     * @param clientId Represents the clientId that own the code.
     * @param state Represents the state of the code.
     */
    public async generateCode(clientId:string, state:string = null):Promise<AuthorizationCode> {

        let authorizationCode:AuthorizationCode = new AuthorizationCode();
        let client:Client = await this._clientRepository.getById(clientId);

        if (!client)
            throw new OAuthError('TODO:PutCode', 'There is not a client with the provided client Id');
        
        authorizationCode.code = await this._identifierGenerationService.getAuthorizationCodeValue();
        authorizationCode.client = client;
        authorizationCode.creationDate = new Date();
        authorizationCode.state = state;

        await this._authorizarionCodeRepository.save(authorizationCode);

        return authorizationCode;
    }

     /**
     * Associate a token to an existing authorization code.
     * @param code Represents the code of the authorization code which the token will be associated.
     * @param token Represents the token that will be associated to the authorization code. 
     */
    public async associateToken(code: string, token: string): Promise<void> {

        let authorizationCode:AuthorizationCode = await this._authorizarionCodeRepository.getByCode(code);

        if (!authorizationCode)
            throw new OAuthError('TODO:PutCode', 'The provided authorization code do not exists');

        let tokenInstance:Token = await this._tokenRepository.getByValue(token);

        if (!tokenInstance)
            throw new Error('The provided token don exists, the association can not be performed.');

        authorizationCode.token = tokenInstance;

        this._authorizarionCodeRepository.save(authorizationCode);                
    }
}