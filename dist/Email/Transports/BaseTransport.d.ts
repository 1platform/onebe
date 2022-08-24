import { Transporter } from "nodemailer";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";
/**
 * Base class that can be used to create a new Email Transport Service.
 *
 * You need to extend this class and attach a transporter service
 * that supports email sending.
 */
export default abstract class BaseTransport implements IEmailTransport {
    /**
     * The message transporter that we use for sending an email.
     */
    protected _transporter: Transporter;
    /**
     * Constructor that initialises the transporter service.
     */
    protected constructor(transporter?: Transporter);
    /**
     * Method used to send emails.
     *
     * @param options The parameters we use for sending an email.
     */
    send(options: IEmailOptions): Promise<any>;
}
