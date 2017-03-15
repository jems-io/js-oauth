import { BaseFlow } from './BaseFlow'
import { FlowResult } from '../Models/FlowResult'
import { IFlowHandler } from '../IFlowHandler'
import { Token } from "../Models/Persistents/Token";
import { ITokenService } from "../Services/ITokenService";
import { IUserService } from "../Services/IUserService";


/**
 * Represents the password flow.
 */
export class PasswordFlow extends BaseFlow {

    private _userService:IUserService;
    private _tokenService:ITokenService;

    /**
     * Create a new instance of password flow class.
     * @param userService Represents a user service.
     */
    constructor(userService:IUserService
               ,tokenService:ITokenService) {

        super('password');

        this._userService = userService;
        this._tokenService = tokenService;
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
    public async execute(handler:IFlowHandler):Promise<void> {
        try
        {
            if (await this._userService.validateCredential(this.username, this.password)) {
                let token:Token = await this._tokenService.generateToken();
                let result:FlowResult = new FlowResult();                
                
                result.accessToken = token.value;
                result.expireIn = token.expireIn;
                result.refreshToken = token.refreshToken ? token.refreshToken.value : null;

                handler.returnResult(result);
            }
        }
        catch(ex) {
            handler.notifyError('');
        }
    }
}