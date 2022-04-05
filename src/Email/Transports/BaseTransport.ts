import { Transporter } from "nodemailer";
import { stripHtml } from "string-strip-html";
import Config from "../../System/Config";
import { getDefaultLogger } from "../../System/Logger";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";

/**
 * Class representing the Base Transport.
 */
export default class BaseTransport implements IEmailTransport {
  /**
   * The message transporter that we use for sending an email.
   */
  protected _transporter: Transporter;

  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */
  public async send(options: IEmailOptions): Promise<any> {
    const info = await this._transporter.sendMail({
      from: options.from || Config.string("email.from"),
      to:
        options.to && Array.isArray(options.to)
          ? options.to.join(", ")
          : options.to,
      cc:
        options.cc && Array.isArray(options.cc)
          ? options.cc.join(", ")
          : options.cc,
      bcc:
        options.bcc && Array.isArray(options.bcc)
          ? options.bcc.join(", ")
          : options.bcc,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text || stripHtml(options.html).result || "",
      html: options.html,
    });

    getDefaultLogger().info(`Email Message sent: ${ info.messageId }`);
    return info;
  }
}
