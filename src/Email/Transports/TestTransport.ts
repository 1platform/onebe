import nodemailer from "nodemailer";
import DefaultLogger from "../../System/Logger";
import BaseTransport from "./BaseTransport";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";

export default class TestTransport
  extends BaseTransport
  implements IEmailTransport
{
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

  public async send(options: IEmailOptions): Promise<void> {
    const info = await super.send(options);
    DefaultLogger.debug(`Preview URL: ${ nodemailer.getTestMessageUrl(info) }`);
  }
}
