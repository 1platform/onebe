import BaseTransport from "./BaseTransport";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";
/**
 * Transport class that can be used for testing email sending.
 * !!!DO NOT USE IN PRODUCTION!!!
 */
export default class TestTransport extends BaseTransport implements IEmailTransport {
    /**
     * Transport constructor.
     */
    constructor();
    /**
     * Method used to send emails.
     *
     * @param options The parameters we use for sending an email.
     */
    send(options: IEmailOptions): Promise<any>;
}
