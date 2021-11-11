import nodemailer from "nodemailer";
import DefaultLogger from "../../System/Logger";
import BaseTransport from "./BaseTransport";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";

/**
 * Class representing a Transport test
 */
export default class TestTransport
  extends BaseTransport
  implements IEmailTransport
{
  /***
   * @constructor
   */
  public constructor() {
    super();
    nodemailer.createTestAccount().then((account) => {
      this._transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
    });
  }

  /***
   * Send method
   * @param options The email options to be used
   */
  public async send(options: IEmailOptions): Promise<void> {
    const info = await super.send(options);
    DefaultLogger.debug(`Preview URL: ${ nodemailer.getTestMessageUrl(info) }`);
  }
}
