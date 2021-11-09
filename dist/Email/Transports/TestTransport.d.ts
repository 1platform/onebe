import BaseTransport from "./BaseTransport";
import IEmailTransport, { IEmailOptions } from "./IEmailTransport";
export default class TestTransport extends BaseTransport implements IEmailTransport {
    constructor();
    send(options: IEmailOptions): Promise<void>;
}
