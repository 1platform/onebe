import { Transporter } from "nodemailer";
import { stripHtml } from "string-strip-html";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";
import type { IEmailOptions, IEmailTransport } from "@/Email/Transports/index";
import { HTTPError } from "@/Exceptions";
import { HTTPStatus } from "@/HTTP";

/**
 * Base class that can be used to create a new Email Transport Service.
 *
 * You need to extend this class and attach a transporter service
 * that supports email sending.
 */
export default abstract class BaseTransport implements IEmailTransport {
  /**
   * The message transporter that we use for sending an email.
   */
  protected _transporter: Transporter;

  /**
   * Constructor that initialises the transporter service.
   */
  protected constructor(transporter?: Transporter) {
    this._transporter = transporter ?? null;
  }

  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */
  public async send(options: IEmailOptions): Promise<any> {
    if (!this._transporter) {
      throw new HTTPError("onebe.errors.email.no-transport", HTTPStatus.SERVER_ERROR);
    }

    const emailOptions = {
      from: options.from || Config.string("email.from"),
      sender: options.sender || options.from || Config.string("email.from"),
      to: options.to && Array.isArray(options.to) ? options.to.join(", ") : options.to,
      cc: options.cc && Array.isArray(options.cc) ? options.cc.join(", ") : options.cc,
      bcc: options.bcc && Array.isArray(options.bcc) ? options.bcc.join(", ") : options.bcc,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text || stripHtml(options.html).result || "",
      html: options.html,
      attachments: (options.attachments || []).map((attachmentFile) => ({ path: attachmentFile })),
    };

    getDefaultLogger().debug(`Email Parameters: ${ JSON.stringify(emailOptions) }`);

    const info = await this._transporter.sendMail(emailOptions);
    getDefaultLogger().info(`Email Message sent: ${ info.messageId }`);
    return info;
  }
}
