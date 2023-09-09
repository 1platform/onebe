import * as nodemailer from "nodemailer";

import BaseTransport from "@/Email/Transports/BaseTransport";
import IEmailTransport, { IEmailOptions } from "@/Email/Transports/IEmailTransport";
import { getDefaultLogger } from "@/System/Logger";

/**
 * Transport class that can be used for testing email sending.
 * !!!DO NOT USE IN PRODUCTION!!!
 */
export default class TestTransport extends BaseTransport implements IEmailTransport {
  /**
   * Transport constructor.
   */
  public constructor() {
    super(null);
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
