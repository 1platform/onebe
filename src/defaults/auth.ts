import type { IConfig } from "../System";
import { Env } from "../System";

/**
 * Authentication system configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * authentication system.
 */
const defaultAuthConfig: IConfig = {
  /**
   * JSON Web Token functions configuration parameters.
   */
  jwt: {
    /**
     * The secret used to encode the JWT Token when you are signing it. Without this
     * your JWT Token isn't secure. Also, do not share this value publicly as there
     * will be security issues for your application.
     *
     * @default "thisisasecret"
     */
    secret: Env.string("JWT_SECRET", "thisisasecret"),

    /**
     * The issuer is used by the sign and verify functions to create/validate a JWT Token.
     * In the sign function, the issuer is added to the token in order to easily check if
     * the received token was created by your application.
     *
     * @default "onebe.sprk.dev"
     */
    issuer: Env.string("JWT_ISSUER", "onebe.sprk.dev"),

    /**
     * The audience is used by the sign and verify functions to create/validate a JWT Token.
     * In the sign function, the audience is added to the token in order to easily check if
     * the received token was created by your application and was received by the intended
     * audience.
     *
     * @default "onebe.sprk.dev"
     */
    audience: Env.string("JWT_AUDIENCE", "onebe.sprk.dev"),

    /**
     * Defines how long a JWT token can be valid. Each JWT token signed by the application,
     * except for the short-lived ones, are valid for this amount of time.
     *
     * @default "1d"
     */
    expireTime: Env.string("JWT_EXPIRE_TIME", "1d"),

    /**
     * When the user of the application wants to be remembered for a longer period of time
     * this configuration parameter is used. In order to use this `rememberMeTime` configuration
     * parameter, you must pass the `rememberMe` parameter to the sign method.
     *
     * @default "1y"
     */
    rememberMeTime: Env.string("JWT_REMEMBER_ME_TIME", "1y"),
  },

  /**
   * Since the authentication engine needs a session to be configured in order to
   * keep track of various session information regarding the user and the authentication
   * method used (mostly in Basic Authentication, but not exclusively) we need to
   * configure the session storage.
   */
  session: {
    /**
     * Since the session should be encoded and not to be easily seen by the user,
     * a secret is required for the session configuration.
     *
     * @default "thisIsAS3cret"
     */
    secret: Env.string("SESSION_SECRET", "thisIsAS3cret"),
  },
};

export default defaultAuthConfig;
