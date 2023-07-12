import EmailTransport from "@/Email/EmailTransport";
import Env from "@/System/Env";
import IConfig from "@/System/IConfig";

/**
 * The Email configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * Email Handling Service.
 */
const defaultEmailConfig: IConfig = {
  /**
   * Flag used to enable or disable the email handling service.
   *
   * @default false
   */
  enabled: Env.flag("EMAIL_ENABLED"),

  /**
   * The desired email handling transport to be used in the application.
   *
   * @see EmailTransport
   * @default EmailTransport.TEST
   */
  transport: Env.string("EMAIL_TRANSPORT", EmailTransport.TEST),

  /**
   * The email address used as the FROM address in the emails sent
   * through the application.
   *
   * @default "onebe@localhost"
   */
  from: Env.string("EMAIL_FROM", "onebe@localhost"),

  /**
   * Configuration parameters used for connecting to the email sending service (mailgun, sendgrid, smtp).
   */
  config: {
    /**
     * The account or email address used to connect to the email sending server.
     *
     * @default "onebe@localhost"
     */
    address: Env.string("EMAIL_ADDRESS", "onebe@localhost"),

    /**
     * The password for the account used to send an email.
     *
     * @default ""
     */
    password: Env.string("EMAIL_PASSWORD", ""),

    /**
     * The URL or IP of the email sending server.
     *
     * @default "localhost"
     */
    server: Env.string("EMAIL_SERVER", "localhost"),

    /**
     * The port used to connect to the email server.
     *
     * @default "25"
     */
    port: Env.string("EMAIL_PORT", "25"),

    /**
     * A flag used to define if the server is using a secure connection or not.
     *
     * @default false
     */
    secure: Env.flag("EMAIL_SECURE"),
  },
};

export default defaultEmailConfig;
