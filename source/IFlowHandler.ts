import { FlowResult } from './Models/FlowResult'
import { FlowError } from "./Models/FlowError";

/**
 * Represents a handler for the flows.
 */
export interface IFlowHandler {
    /**
     * Redirect the request to another page, usually the authorization page.
     * @param url Represents the url to redirect.
     */
    redirectToURL(url:string):void
    /**
     * Return the flow result to the requester client.
     * @param result Represents the result to return.
     */
    returnResult(result:FlowResult):void
    /**
     * Notify an error that may occur.
     * @param Represents the error that occur.
     */
    notifyError(error:FlowError):void
}