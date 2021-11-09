import Env from "../System/Env";
import IConfig from "../System/IConfig";

const defaultAuthConfig: IConfig = {
  jwt: {
    secret: Env.string("JWT_SECRET", "thisisasecret"),
    issuer: Env.string("JWT_ISSUER", "onebe.sprk.dev"),
    audience: Env.string("JWT_AUDIENCE", "onebe.sprk.dev"),
    expireTime: Env.string("JWT_EXPIRE_TIME", "1d"),
    rememberMeTime: Env.string("JWT_REMEMBER_ME_TIME", "1y"),
  },
};

export default defaultAuthConfig;
