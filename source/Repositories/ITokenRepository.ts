import { Token } from '../Models/Persistents/Token'

/**
 * Represents a token repository to persists tokens.
 */
export interface ITokenRepository { 

    /**
     * Returns a tokent instance by the given value.
     * @param value Represents the value to look for.
     */ 
    getByValue(value:string):Promise<Token>;

    /**
     * Save or update the token instance;
     * @param token The token instance to persist.
     */
    save(token:Token):Promise<void>;
}