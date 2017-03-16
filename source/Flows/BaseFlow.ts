import { IFlow } from './IFlow'
import { IFlowHandler } from '../IFlowHandler'
import { FlowError } from "../Models/FlowError";
import { ICLientService } from "../Services/IClientService";

/**
 * Represents a base class for the oAuth flows.
 */
export abstract class BaseFlow implements IFlow {
    /**
     * Construct a new base flow [BaseFP] with the given type.
     * @param type Represents the type of the flow processor.
     */
    constructor(type:string, clientService:ICLientService) {
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
     * Execute the flow resolution and handle it with the given handler.
     * @param handle Represents the handler.
     */
    public async resolve(handler:IFlowHandler):Promise<boolean> {

        let error:FlowError = await this.validate();

        if (error) {
            handler.notifyError(error);
            return true;
        }
        else
            return false;  
    };

    /**
     * Return a flow error instance when a error is founded in the evaluated flow.
     * If return null no error was found.
     */
    private async validate():Promise<FlowError> {
        return null;
    };
}