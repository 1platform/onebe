/**
 * Interface representing the method needed for SMS Transport
 */
export default interface ISMSTransport {
    /**
     * Method used to send an SMS.
     *
     * @param to The receiver of the message
     * @param text The text of the message
     * @param from The sender of the message
     */
    send(to: string, text: string, from?: string): Promise<void>;
}
