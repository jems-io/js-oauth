import { FlowResult } from "./Models/FlowResult";
import { IFlowResultBuilder } from "./IFlowResultBuilder";
import { ITokenService } from "./Services/ITokenService";
import { Token } from "./Models/Persistents/Token";

/**
 * Represents the a builder to vuild flows results.
 */
export class FlowResultBuilder implements IFlowResultBuilder {
    
    private _tokenService:ITokenService;
    
    /**
     * Create a new instance of flow result builder.
     * @param tokenService Represents a token service used to generate tokens.
     */
    constructor(tokenService:ITokenService) {
        
        this._tokenService = tokenService;
    }

    /**
     * Return a builder FlowResult.
     */
    public async getResult():Promise<FlowResult> {
        
        let token:Token = await this._tokenService.generateToken();
        let result:FlowResult = new FlowResult();                
        
        result.accessToken = token.value;
        result.expireIn = token.expireIn;
        result.refreshToken = token.refreshToken ? token.refreshToken.value : null;

        return result;
    }
}