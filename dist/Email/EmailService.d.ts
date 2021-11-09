import ServiceBase from "../Services/ServiceBase";
import IEmailTransport, { IEmailOptions } from "./Transports/IEmailTransport";
export default class EmailService extends ServiceBase implements IEmailTransport {
    private readonly _enableService;
    private readonly _transport;
    constructor();
    send(options: IEmailOptions): Promise<void>;
}
