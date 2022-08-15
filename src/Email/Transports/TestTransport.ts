import nodemailer from "nodemailer";
import { getDefaultLogger } from "../../System/Logger";
import BaseTransport from "./BaseTransport";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";

/**
 * Email testing Transport class.
 */
export default class TestTransport extends BaseTransport implements IEmailTransport {
  /**
   * TestTransport constructor.
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

  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */
  public async send(options: IEmailOptions): Promise<any> {
    const info = await super.send(options);
    getDefaultLogger().debug(`Preview URL: ${ nodemailer.getTestMessageUrl(info) }`);

    return info;
  }
}
