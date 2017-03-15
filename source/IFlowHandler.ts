import { FlowResult } from './Models/FlowResult'

/**
 * Represent a handler for the flows.
 */
export interface IFlowHandler {
    /**
     * Redirect the request to another page, usually the authorization page.
     */
    redirect(url:string):void
    /**
     * Return the flow result to the requester client.
     */
    return(result:FlowResult):void
    /**
     * Notify an error that may occur.
     */
    notifyError(error:string):void
}