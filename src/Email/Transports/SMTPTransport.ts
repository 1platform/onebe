import nodemailer from "nodemailer";
import { Config } from "../../System";
import BaseTransport from "./BaseTransport";
import IEmailTransport from "./IEmailTransport";

/**
 * SMTP Transport that can be used for sending emails.
 */
export default class SMTPTransport extends BaseTransport implements IEmailTransport {
  /**
   * Transport constructor.
   */
  public constructor() {
    super(
      nodemailer.createTransport({
        host: Config.string("email.config.server"),
        port: Config.number("email.config.port", 587),
        secure: Config.boolean("email.config.secure"),
        auth: {
          user: Config.string("email.config.address"),
          pass: Config.string("email.config.password"),
        },
      })
    );
  }
}
