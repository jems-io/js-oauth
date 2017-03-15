import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents a oAuth flow.
 */
export interface IFlow {
    /**
     * Execute the flow and handle it with the given handler.
     */
    execute(handler:IFlowHandler):Promise<void>
}