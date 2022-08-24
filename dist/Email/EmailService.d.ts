import ServiceBase from "../Services/ServiceBase";
import IEmailTransport, { IEmailOptions } from "./Transports/IEmailTransport";
/**
 * Service used to handle Email communications from the application.
 */
export default class EmailService extends ServiceBase implements IEmailTransport {
    /**
     * Flag used to enable or disable the Email Service.
     */
    private readonly _enableService;
    /**
     * The transport used for handling the emailing part.
     */
    private readonly _transport;
    /**
     * Email Service constructor.
     */
    constructor();
    /**
     * Method used to send emails.
     *
     * @param options The parameters you have to use when sending an email.
     */
    send(options: IEmailOptions): Promise<void>;
}
