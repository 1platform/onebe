export default interface ISMSTransport {
    send(to: string, text: string, from?: string): Promise<void>;
}
