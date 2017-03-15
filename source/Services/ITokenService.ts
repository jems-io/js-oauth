import { Token } from '../Models/Persistents/Token'

/**
 * Represents a token service.
 */
export interface ITokenService {    

    /**
     * Get a token intance by the given value.
     * @param tokenValue Represents the token value to look for.
     */
    getByValue(tokenValue:string):Promise<Token>;

    /**
     * Get a new generated token.
     */
    generateToken():Promise<Token>;    
}