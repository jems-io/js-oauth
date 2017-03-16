import { Token } from '../Models/Persistents/Token'

/**
 * Represents a token service.
 */
export interface ITokenService {    

    /**
     * Returns a token intance by the given value.
     * @param tokenValue Represents the token value to look for.
     */
    getByValue(tokenValue:string):Promise<Token>;

    /**
     * Returns a new generated token.
     */
    generateToken():Promise<Token>;    
}