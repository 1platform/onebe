import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default values for SMS config in Env
 */
const defaultSMSConfig: IConfig = {
  enabled: Env.flag("SMS_ENABLED"),
  provider: Env.string("SMS_PROVIDER", ""),
  config: {
    phone: Env.string("SMS_PHONE_NUMBER"),
    account: Env.string("SMS_ACCOUNT"),
    password: Env.string("SMS_PASSWORD"),
  },
};

export default defaultSMSConfig;
