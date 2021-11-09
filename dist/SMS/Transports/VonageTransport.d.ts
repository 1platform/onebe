import ISMSTransport from "./ISMSTransport";
export default class VonageTransport implements ISMSTransport {
    private readonly _vonage;
    private readonly _defaultPhone;
    constructor();
    send(to: string, text: string, from?: string): Promise<void>;
}
