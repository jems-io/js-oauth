import { BaseFlow } from './BaseFlow'
import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents a base class for scoped based oAuth flows. 
 */
export abstract class ScopeBaseFlow extends BaseFlow {
    constructor(type:string) {
        super(type);
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
     * Execute the flow and handle it with the given handler.
     * @param handler Represents the handler for the flow.
     */
    public abstract execute(handler:IFlowHandler):Promise<void>;
}