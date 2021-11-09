import ISMSTransport from "./ISMSTransport";
export default class TwilioTransport implements ISMSTransport {
    private readonly _twilio;
    private readonly _defaultPhone;
    constructor();
    send(to: string, text: string, from?: string): Promise<void>;
}
