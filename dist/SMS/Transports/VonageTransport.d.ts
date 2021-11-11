import ISMSTransport from "./ISMSTransport";
/**
 * Class representing the Vonage Transport handler
 */
export default class VonageTransport implements ISMSTransport {
    /**
     * The Vonage service
     */
    private readonly _vonage;
    /**
     * The default phone config
     */
    private readonly _defaultPhone;
    /**
     * VonageTransport constructor
     */
    constructor();
    /**
     * Method used to send an SMS.
     *
     * @param to The receiver of the message
     * @param text The text of the message
     * @param from The sender of the message
     */
    send(to: string, text: string, from?: string): Promise<void>;
}
