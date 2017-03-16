import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents a oAuth flow.
 */
export interface IFlow {
    /**
     * Execute the flow resolution and handle it with the given handler.
     * @param handle Represents the handler.
     */
    resolve(handler:IFlowHandler):Promise<boolean>;
}