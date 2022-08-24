import ServiceBase from "../Services/ServiceBase";
import ISMSTransport from "./Transports/ISMSTransport";
/**
 * Service used to handle SMS Sending from the application.
 */
export default class SMSService extends ServiceBase implements ISMSTransport {
    /**
     * Flag used to enable or disable the SMS Service.
     */
    private readonly _enableService;
    /**
     * The SMS Transport used by the application.
     */
    private readonly _transport;
    /**
     * SMSService Constructor
     */
    constructor();
    /**
     * Method used to send SMS messages
     *
     * @param to The receiver of the message
     * @param text The text of the message
     * @param from The sender of the message
     */
    send(to: string, text: string, from?: string): Promise<void>;
}
