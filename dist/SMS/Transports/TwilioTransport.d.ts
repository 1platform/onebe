import ISMSTransport from "./ISMSTransport";
/**
 * SMS Transport using the Twilio engine.
 */
export default class TwilioTransport implements ISMSTransport {
    /**
     * Twilio service handler.
     */
    private readonly _twilio;
    /**
     * The default phone configuration.
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
