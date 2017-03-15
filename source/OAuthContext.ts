import { OAuthContextConfiguration } from './OAuthContextConfiguration'

/**
 * Represents an OAuth context.
 */
export class OAuthContext {

    private _configuration:OAuthContextConfiguration;

    /**
     * Create a new instance of the OAuth context with a default configuration.
     */
    constructor() {
        this.loadConfiguration();        
    }

    /**
     * Get the context configuration.
     */
    public get configuration() { return this._configuration; }

    private loadConfiguration() {
        this._configuration = new OAuthContextConfiguration();
        this._configuration.tokenExpirationTime = null;
        this._configuration.refreshTokenExpirationTime = null;
        this._configuration.authorizationCodeExpirationTime = 30;
        this._configuration.mustGenerateRefreshToken = false;
    }
}