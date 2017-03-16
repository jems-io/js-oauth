/**
 * Represents a set of configurations for an OAuth context;
 */
export class OAuthContextConfiguration {

    /**
     * Get or set the amount of time in second for a token to expire;
     */
    public tokenExpirationTime:number;

    /**
     * Get or set the amount of time in second for a refresh token to expire;
     */
    public refreshTokenExpirationTime:number;

     /**
     * Get or set the amount of time in second for an authorization code to expire;
     */
    public authorizationCodeExpirationTime:number;

    /**
     * Get or set a boolean value specifying if the token generation process must create an refresh token;
     */
    public mustGenerateRefreshToken:boolean;

    /**
     * Get or set the length of the generated tokens.
     */
    public tokenLength:number;

    /**
     * Get or set the length of the generated authorization codes.
     */
    public authorizationCodeLength:number;
}