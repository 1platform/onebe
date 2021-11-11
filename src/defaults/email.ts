import Env from "../System/Env";
import IConfig from "../System/IConfig";

/**
 * Default configuration for the Email services.
 */
const defaultEmailConfig: IConfig = {

  /**
   * The default value indicating whether the services are enabled or not.
   */
  enabled: Env.flag("EMAIL_ENABLED"),

  /**
   * The default value for email transport.
   */
  transport: Env.string("EMAIL_TRANSPORT", "test"),

  /**
   * The default sender address.
   */
  from: Env.string("EMAIL_FROM", "onebe@sprk.dev"),

  /**
   * The default configuration for the email service.
   */
  config: {

    /**
     * The default value of the email address which will be used to send emails.
     */
    address: Env.string("EMAIL_ADDRESS", "onebe@sprk.dev"),

    /**
     * The default value for the password associated with the email address used.
     */
    password: Env.string("EMAIL_PASSWORD", ""),

    /**
     * The default value for the used server.
     */
    server: Env.string("EMAIL_SERVER", "localhost"),

    /**
     * The default value for the used port.
     */
    port: Env.string("EMAIL_PORT", "25"),

    /**
     * The default flag that indicates whether the email services are secure.
     */
    secure: Env.flag("EMAIL_SECURE"),
  },
};

export default defaultEmailConfig;
