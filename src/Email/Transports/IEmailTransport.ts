
/**
 * Interface representing Email Options
 * @interface
 */

export interface IEmailOptions {
  to?: string | Array<string>;
  from?: string;
  cc?: string | Array<string>;
  bcc?: string | Array<string>;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Interface for EmailTransport
 * @interface
 */

export default interface IEmailTransport {
  send(options: IEmailOptions): Promise<void>;
}
