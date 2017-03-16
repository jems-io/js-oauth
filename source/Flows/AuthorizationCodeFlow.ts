import { ScopeBaseFlow } from './ScopeBaseFlow'
import { IFlowHandler } from '../IFlowHandler'
import { IClientService } from "../Services/IClientService";
import { IFlowResultBuilder } from "../IFlowResultBuilder";

/**
 * Represents a authorization code flow.
 */
export class AuthorizationCodeFlow extends ScopeBaseFlow {

    constructor(clientService:IClientService
               ,flowResultBuilder:IFlowResultBuilder) {

        super('authorization_code', clientService);
    }  

    /**
     * Execute the flow resolution and handle it with the given handler.
     * @param handle Represents the handler.
     */
    public async resolve(handler:IFlowHandler):Promise<boolean> {
      
        if (!super.resolve(handler) && await this._userService.validateCredentials(this.username, this.password)) {
            handler.returnResult(await this._flowResultBuilder.getResult());
        }
        else
            return false;

    }
}