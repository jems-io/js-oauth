import { BaseFlow } from './BaseFlow'
import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents the password flow.
 */
export class PasswordFlow extends BaseFlow {
    constructor() {
        super('password')
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
     * Execute the flow and handle it with the given handler.
     * @param handler Represents the handler for the flow.
     */
    public execute(handler:IFlowHandler):void {  

       
    }
}