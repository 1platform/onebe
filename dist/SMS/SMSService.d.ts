import ServiceBase from "../Services/ServiceBase";
import ISMSTransport from "./Transports/ISMSTransport";
/**
 * Class exposing the SMS sending functionality.
 */
export default class SMSService extends ServiceBase implements ISMSTransport {
    /**
     * If the service is enabled or not.
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
