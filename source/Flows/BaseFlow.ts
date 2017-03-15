import { IFlow } from './IFlow'
import { IFlowHandler } from '../IFlowHandler'

/**
 * Represents a base class for the oAuth flows.
 */
export abstract class BaseFlow implements IFlow {
    /**
     * Construct a new base flow [BaseFP] with the given type.
     * @param type Represents the type of the flow processor.
     */
    constructor(type:string) {
        this._type = type;
    }

    private _type:string;

    /**
     * Get the oAuth flow type.
     */
    get type() { return this._type;}

    /**
     * Get or set the client id with which the flow get the result.
     */
    public clientId: string;

    /**
     * Execute the flow and handle it with the given handler.
     * @param handler Represents the handler for the flow.
     */
    public abstract execute(handler:IFlowHandler):void;
}