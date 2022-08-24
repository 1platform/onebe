import BaseTransport from "./BaseTransport";
import IEmailTransport from "./IEmailTransport";
/**
 * SMTP Transport that can be used for sending emails.
 */
export default class SMTPTransport extends BaseTransport implements IEmailTransport {
    /**
     * Transport constructor.
     */
    constructor();
}
