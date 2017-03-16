import { BaseFlow } from './BaseFlow'
import { IFlowHandler } from '../IFlowHandler'
import { IClientService } from "../Services/IClientService";
import { FlowError } from "../Models/FlowError";

/**
 * Represents a base class for scoped based oAuth flows. 
 */
export abstract class ScopeBaseFlow extends BaseFlow {
    constructor(type:string, clientService:IClientService) {
        super(type, clientService);
    }

    /**
     * Get or set the state to validate the authenticity when is compared with the result state.
     */
    public state:string;

    /**
     * Get or set the redirection url used in the authorization code flow.
     */
    public redirectUri:string;

    /**
     * Get or set the requested scopes.
     */
    public scopes:string[];

    /**
     * Execute the flow resolution and handle it with the given handler.
     * @param handle Represents the handler.
     */
    public async resolve(handler:IFlowHandler):Promise<boolean> {

        if (!super.resolve(handler))
        {
            let error:FlowError = await this.validate();   

            if (error) {
                handler.notifyError(error);
                return true; // I resolve it;
            }        
        }

        return false; // I can not resolve it;     
    };

    /**
     * Return a flow error instance when a error is founded in the evaluated flow.
     * If return null no error was found.
     */
    private async validate():Promise<FlowError> {
        return null;
    };
}