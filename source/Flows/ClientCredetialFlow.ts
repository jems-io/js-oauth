import { BaseFlow } from './BaseFlow'
import { IFlowHandler } from '../IFlowHandler'
import { IClientService } from "../Services/IClientService";
import { FlowResult } from "../Models/FlowResult";
import { Token } from "../Models/Persistents/Token";
import { ITokenService } from "../Services/ITokenService";
import { IFlowResultBuilder } from "../IFlowResultBuilder";

/**
 * Represents a client credential flow.
 */
export class ClientCredetialFlow extends BaseFlow {

    private _clientService:IClientService;
    private _flowResultBuilder:IFlowResultBuilder;

    /**
     * Create ne instance of client credential flow.
     * @param clientService Represents a client service to authenticate and validate the client.
     * @param flowResultBuilder Represents a builder to build results.
     */
    constructor(clientService:IClientService
               ,flowResultBuilder:IFlowResultBuilder) {

        super('client_credential', clientService);

        this._clientService = clientService;
        this._flowResultBuilder = flowResultBuilder;
    }

    /**
     * Get or set the client secret for the flow authentication.
     */
    public clientSecret:string;

    /**
     * Execute the flow resolution and handle it with the given handler.
     * @param handle Represents the handler.
     */
    public async resolve(handler:IFlowHandler):Promise<boolean> {

         if (!super.resolve(handler)) {
            try {
                await this._clientService.validateCredentials(this.clientId, this.clientSecret);
                handler.returnResult(await this._flowResultBuilder.getResult());
            }
            catch(ex) {
                if (!this.resolveError(ex, handler))
                    throw ex;
            }
        }
        else
            return true; 
    }
}