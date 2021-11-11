import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for SMS services.
 */
const defaultSMSConfig: IConfig = {
  /**
   * The default flag that indicates whether SMS services are enabled for the application.
   */
  enabled: Env.flag("SMS_ENABLED"),

  /**
   * The default value for the SMS provider.
   */
  provider: Env.string("SMS_PROVIDER", ""),

  /**
   * The default configuration used by the provider.
   */
  config: {
    /**
     * The default phone number that will be used to send messages from.
     */
    phone: Env.string("SMS_PHONE_NUMBER"),

    /**
     * The default value of the account that will be used.
     */
    account: Env.string("SMS_ACCOUNT"),

    /**
     * The default value of the password for the used account.
     */
    password: Env.string("SMS_PASSWORD"),
  },
};

export default defaultSMSConfig;
