import nodemailer from "nodemailer";
import Config from "../../System/Config";
import BaseTransport from "./BaseTransport";
import IEmailTransport from "./IEmailTransport";

/**
 * SMTP Transport used for sending emails.
 */
export default class SMTPTransport extends BaseTransport implements IEmailTransport {
  /**
   * SMTPTransport constructor.
   */
  public constructor() {
    super();
    this._transporter = nodemailer.createTransport({
      host: Config.string("email.config.server"),
      port: Config.number("email.config.port", 587),
      secure: Config.boolean("email.config.secure"),
      auth: {
        user: Config.string("email.config.address"),
        pass: Config.string("email.config.password"),
      },
    });
  }
}
