import BaseTransport from "./BaseTransport";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";
/**
 * Email testing Transport class.
 */
export default class TestTransport extends BaseTransport implements IEmailTransport {
    /**
     * TestTransport constructor.
     */
    constructor();
    /**
     * Method used to send emails.
     *
     * @param options The parameters we use for sending an email.
     */
    send(options: IEmailOptions): Promise<any>;
}
