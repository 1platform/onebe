/**
 * Interface representing the method needed for SMS Transport
 * @interface
 */
export default interface ISMSTransport {
  /**
   * The send method
   * @param to The receiver of the SMS
   * @param text The text of the SMS
   * @param from The sender of the SMS
   */
  send(to: string, text: string, from?: string): Promise<void>;
}
