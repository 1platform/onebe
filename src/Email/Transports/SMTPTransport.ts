import nodemailer from "nodemailer";

import BaseTransport from "@/Email/Transports/BaseTransport";
import IEmailTransport from "@/Email/Transports/IEmailTransport";
import Config from "@/System/Config";

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
