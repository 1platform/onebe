import { Transporter } from "nodemailer";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";
/**
 * Class representing the Base Transport.
 */
export default class BaseTransport implements IEmailTransport {
    /**
     * The message transporter that we use for sending an email.
     */
    protected _transporter: Transporter;
    /**
     * Method used to send emails.
     *
     * @param options The parameters we use for sending an email.
     */
    send(options: IEmailOptions): Promise<any>;
}
