import ISMSTransport from "./ISMSTransport";
/**
 * Class representing the Twilio Transport handler
 */
export default class TwilioTransport implements ISMSTransport {
    /**
     * The Twilio service
     */
    private readonly _twilio;
    /**
     * THe default phone config
     */
    private readonly _defaultPhone;
    /**
     * TwilioTransport constructor
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
