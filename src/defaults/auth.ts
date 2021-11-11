import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for JsonWebToken
 */
const defaultAuthConfig: IConfig = {
  jwt: {
    /**
     * The default value of the secret used in the encoding of the token.
     */
    secret: Env.string("JWT_SECRET", "thisisasecret"),

    /**
     * The default value of the principal who issued the token.
     */
    issuer: Env.string("JWT_ISSUER", "onebe.sprk.dev"),

    /**
     * The default value for the audience for which the token is intended.
     */
    audience: Env.string("JWT_AUDIENCE", "onebe.sprk.dev"),

    /**
     * The default value for the expiration time of the generated token, after which it will no longer be accepted.
     */
    expireTime: Env.string("JWT_EXPIRE_TIME", "1d"),

    /**
     * The default value of the expiration time in case the token is to be remembered.
     */
    rememberMeTime: Env.string("JWT_REMEMBER_ME_TIME", "1y"),
  },
};

export default defaultAuthConfig;
