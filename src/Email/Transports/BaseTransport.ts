import { Transporter } from "nodemailer";
import stringStripHtml from "string-strip-html";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";

/**
 * Class representing a Base Transport
 * @class
 * @implements IEmailTransport
 */
export default class BaseTransport implements IEmailTransport {
  /**
   * A protected property representing nodemailer Transporter
   * @property
   * @type Transporter
   * @protected
   */
  protected _transporter: Transporter;

  /**
   * Public method for email sending
   * @param options The IEmailOptions to be used
   * @public
   */

  public async send(options: IEmailOptions): Promise<void> {
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
      text:
        options.text || stringStripHtml.stripHtml(options.html).result || "",
      html: options.html,
    });

    DefaultLogger.info(`Email Message sent: ${ info.messageId }`);
  }
}
