import nodemailer from "nodemailer";
import Config from "../../System/Config";
import BaseTransport from "./BaseTransport";
import IEmailTransport from "./IEmailTransport";

/**
 * Class representing SMTPTransport
 * @class
 * @extends BaseTransport
 * @implements IEmailTransport
 */

export default class SMTPTransport
  extends BaseTransport
  implements IEmailTransport
{

  /**
   * @constructor
   * */
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
