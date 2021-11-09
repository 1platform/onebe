import ServiceBase from "../Services/ServiceBase";
import ISMSTransport from "./Transports/ISMSTransport";
export default class SMSService extends ServiceBase implements ISMSTransport {
    private readonly _enableService;
    private readonly _transport;
    constructor();
    send(to: string, text: string, from?: string): Promise<void>;
}
