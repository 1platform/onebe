import { getEnv } from "@/System/Environment";
import type IConfig from "@/System/IConfig";

/**
 * The SMS Sending configuration object.
 *
 * In this file you can change various configuration parameters related to the
 * SMS sending functionality of the application.
 */
const defaultSMSConfig: IConfig = {
  /**
   * Flag used to enable or disable the SMS Sending functionality.
   *
   * @default false
   */
  enabled: getEnv().flag("SMS_ENABLED"),

  /**
   * In order to be able to send SMS messages we need to specify a provider.
   * In the framework 2 providers are supported: `vonage` and `twilio`.
   *
   * @see SMSProvider
   * @default ""
   */
  provider: getEnv().string("SMS_PROVIDER", ""),

  /**
   * While using the SMS Service, we need to provide some additional configuration
   * to the provider services. In this configuration object we provide additional information
   * that can be used in order to access any of the supported providers.
   */
  config: {
    /**
     * The phone number used to send the SMS message.
     *
     * @default ""
     */
    phone: getEnv().string("SMS_PHONE_NUMBER"),

    /**
     * The account used to connect to the SMS provider. This account will be provided to
     * you by the service you are using. Do not use your email address and password
     * that you use to connect to any of the service providers.
     *
     * @default ""
     */
    account: getEnv().string("SMS_ACCOUNT"),

    /**
     * The password used to connect to the SMS provider. This password will be provided to
     * you by the service you are using. Do not use your email address and password
     * that you use to connect to any of the service providers.
     *
     * @default ""
     */
    password: getEnv().string("SMS_PASSWORD"),
  },
};

export default defaultSMSConfig;
