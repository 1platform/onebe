import Vonage from "@vonage/server-sdk";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";
import ISMSTransport from "./ISMSTransport";

export default class VonageTransport implements ISMSTransport {
  private readonly _vonage: Vonage;
  private readonly _defaultPhone = Config.string("sms.config.phone");

  public constructor() {
    this._vonage = new Vonage({
      apiKey: Config.string("sms.config.account"),
      apiSecret: Config.string("sms.config.password"),
    });
  }

  public send(to: string, text: string, from?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._vonage.message.sendSms(
        from || this._defaultPhone,
        to,
        text,
        {},
        (err, responseData) => {
          if (err) {
            DefaultLogger.error(err);
            return;
          }
          if (responseData.messages[0]["status"] === "0") {
            DefaultLogger.info("Message sent successfully!");
          } else {
            DefaultLogger.error(
              `Message failed with error: ${ responseData.messages[0]["error-text"] }`
            );
          }
        }
      );
    });
  }
}
