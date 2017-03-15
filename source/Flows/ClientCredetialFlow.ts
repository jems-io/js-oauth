import { BaseFlow } from './BaseFlow'
import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents a client credential flow.
 */
export class ClientCredetialFlow extends BaseFlow {
    constructor() {
        super('client_credential')
    }

    /**
     * Get or set the client secret for the flow authentication.
     */
    public clientSecret:string;

    /**
     * Execute the flow and handle it with the given handler.
     * @param handler Represents the handler for the flow.
     */
    public execute(handler:IFlowHandler):void {  

       
    }
}