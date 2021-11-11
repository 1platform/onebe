import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default values for Email config in Env
 */
const defaultEmailConfig: IConfig = {
  enabled: Env.flag("EMAIL_ENABLED"),
  transport: Env.string("EMAIL_TRANSPORT", "test"),
  from: Env.string("EMAIL_FROM", "onebe@sprk.dev"),
  config: {
    address: Env.string("EMAIL_ADDRESS", "onebe@sprk.dev"),
    password: Env.string("EMAIL_PASSWORD", ""),
    server: Env.string("EMAIL_SERVER", "localhost"),
    port: Env.string("EMAIL_PORT", "25"),
    secure: Env.flag("EMAIL_SECURE"),
  },
};

export default defaultEmailConfig;
