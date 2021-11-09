import nodemailer from "nodemailer";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";
export default class BaseTransport implements IEmailTransport {
    protected _transporter: nodemailer.Transporter;
    send(options: IEmailOptions): Promise<void>;
}
