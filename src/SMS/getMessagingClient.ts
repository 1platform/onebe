import twilio, { Twilio } from "twilio";
import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";

/**
 * A list with the supported messaging types.
 */
export enum MessagingType {
  TWILIO = "twilio",
  VONAGE = "vonage",
}

/**
 * Supported data types for the messaging object.
 */
type MessagingTypeObject = Twilio | Vonage;

/**
 * Method used to return the client instance for the different messaging engines supported by the framework.
 *
 * @param type The type of messaging client instance needed.
 * @param configuration The configuration passed to create the messaging client instance.
 */
export default function getMessagingClient<T extends MessagingTypeObject>(type: MessagingType, configuration: Record<string, any>): T {
  if (type === MessagingType.TWILIO) {
    return twilio(configuration.account, configuration.password) as T;
  }

  return new Vonage(
    new Auth({
      apiKey: configuration.account,
      apiSecret: configuration.password,
    })
  ) as T;
}

/**
 * Return the Twilio Client instance.
 *
 * @param configuration The configuration needed to create the client instance.
 */
export function getTwilioClient(configuration: Record<string, any>): Twilio {
  return getMessagingClient<Twilio>(MessagingType.TWILIO, configuration);
}

/**
 * Return the Vonage Client instance.
 *
 * @param configuration The configuration needed to create the client instance.
 */
export function getVonageClient(configuration: Record<string, any>): Vonage {
  return getMessagingClient<Vonage>(MessagingType.VONAGE, configuration);
}
