import ServiceBase from "../Services/ServiceBase";
import IEmailTransport, { IEmailOptions } from "./Transports/IEmailTransport";
/**
 * Class exposing the Email sending functionality.
 */
export default class EmailService extends ServiceBase implements IEmailTransport {
    /**
     * Is the service enabled?
     */
    private readonly _enableService;
    /**
     * The used email transport.
     */
    private readonly _transport;
    /**
     * Email Service constructor.
     */
    constructor();
    /**
     * Method used to send emails.
     *
     * @param options The parameters we use for sending an email.
     */
    send(options: IEmailOptions): Promise<void>;
}
