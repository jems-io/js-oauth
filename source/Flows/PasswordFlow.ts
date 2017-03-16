import { BaseFlow } from './BaseFlow'
import { FlowResult } from '../Models/FlowResult'
import { IFlowHandler } from '../IFlowHandler'
import { Token } from "../Models/Persistents/Token";
import { ITokenService } from "../Services/ITokenService";
import { IUserService } from "../Services/IUserService";
import { FlowError } from "../Models/FlowError";
import { IFlowResultBuilder } from "../IFlowResultBuilder";
import { IClientService } from "../Services/IClientService";
import { OAuthError } from "../OAuthError";


/**
 * Represents the password flow.
 */
export class PasswordFlow extends BaseFlow {

    private _userService:IUserService;    
    private _clientService:IClientService;
    private _flowResultBuilder:IFlowResultBuilder;

    /**
     * Create a new instance of password flow class.
     * @param userService Represents a user service used to authenticate the user. 
     * @param clientService Represents a client service to perform some basic flow validations.
     * @param flowResultBuilder Represents a builder to build results.
     */
    constructor(userService:IUserService               
               ,clientService:IClientService
               ,flowResultBuilder:IFlowResultBuilder) {

        super('password', clientService);

        this._userService = userService;
        this._clientService = clientService;
    }

    /**
     * Represents the user name to authenticate;
     */
    public username:string;
    /**
     * Represents the password of the user name to authenticate;
     */
    public password:string;

     /**
     * Execute the flow resolution and handle it with the given handler.
     * @param handle Represents the handler.
     */
    public async resolve(handler:IFlowHandler):Promise<boolean> {
      
        if (!super.resolve(handler)) {
            try {
                await this._userService.validateCredentials(this.username, this.password);
                handler.returnResult(await this._flowResultBuilder.getResult());
            }
            catch(ex) {
                if (!this.resolveError(ex, handler))
                    throw ex;
            }
        }
        else
            return true;

    }
}