import { Vonage } from "@vonage/server-sdk";
import { Auth } from "@vonage/auth";
import Config from "../../System/Config";
import ISMSTransport from "./ISMSTransport";
import { getDefaultLogger } from "@/System/Logger";

/**
 * SMS Transport using the Vonage/Nexmo engine.
 */
export default class VonageTransport implements ISMSTransport {
  /**
   * The Vonage transport handler.
   */
  private readonly _vonage: Vonage;
  /**
   * The default phone configuration.
   */
  private readonly _defaultPhone = Config.string("sms.config.phone");

  /**
   * VonageTransport constructor
   */
  public constructor() {
    this._vonage = new Vonage(
      new Auth({
        apiKey: Config.string("sms.config.account"),
        apiSecret: Config.string("sms.config.password"),
      })
    );
  }

  /**
   * Method used to send an SMS.
   *
   * @param to The receiver of the message
   * @param text The text of the message
   * @param from The sender of the message
   */
  public async send(to: string, text: string, from?: string): Promise<void> {
    try {
      const response = await this._vonage.sms.send({
        to,
        from: from || this._defaultPhone,
        text,
      });

      if (response.messages[0]["status"] === "0") {
        getDefaultLogger().info("Message sent successfully!");
        return;
      }
      getDefaultLogger().error(`Message failed with error: ${ response.messages[0]["error-text"] }`);
    } catch (err) {
      getDefaultLogger().error(err);
    }
  }
}
