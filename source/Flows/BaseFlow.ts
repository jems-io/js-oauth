import { IFlow } from './IFlow'
import { IFlowHandler } from '../IFlowHandler'
import { FlowError } from "../Models/FlowError";
import { IClientService } from "../Services/IClientService";
import { OAuthError } from "../OAuthError";

/**
 * Represents a base class for the oAuth flows.
 */
export abstract class BaseFlow implements IFlow {
    /**
     * Construct a new base flow [BaseFP] with the given type.
     * @param type Represents the type of the flow processor.
     */
    constructor(type:string, clientService:IClientService) {
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
     * @returns A boolean value specifying if the flow is reolved.
     */
    public async resolve(handler:IFlowHandler):Promise<boolean> {

        let error:FlowError = await this.validate();

        if (error) {
            handler.notifyError(error);
            return true; // I resolve it;
        }
        else
            return false;  // I can not resolve it;
    };

    /**
     * Execute the error resolution and handle it with the given handler.
     * @param error Represents the error to resolve.
     * @param handler Represents the handler.
     * @returns A boolean value specifying if the error is reolved.
     */
    protected resolveError(error:Error, handler:IFlowHandler) {
        if (error instanceof OAuthError) {

            let oauthError:OAuthError = <OAuthError>error;

            handler.notifyError(new FlowError(oauthError.code, oauthError.message));
        }
        else 
            return false;                
    }

    /**
     * Return a flow error instance when a error is founded in the evaluated flow.
     * If return null no error was found.
     */
    protected async validate():Promise<FlowError> {
        return null;
    };
}