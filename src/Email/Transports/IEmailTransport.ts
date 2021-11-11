/**
 * The options that we can pass to send an email.
 */
export interface IEmailOptions {
  /**
   * To who we send the email.
   */
  to?: string | Array<string>;
  /**
   * From who is the email.
   */
  from?: string;
  /**
   * To who we send a carbon copy email.
   */
  cc?: string | Array<string>;
  /**
   * To who we send a blind carbon copy email.
   */
  bcc?: string | Array<string>;
  /**
   * Who will receive the reply of the email.
   */
  replyTo?: string;
  /**
   * The subject of the email.
   */
  subject: string;
  /**
   * The content of the email, in plain text format.
   */
  text?: string;
  /**
   * The content of the email, in HTML format.
   */
  html?: string;
}

/**
 * How should the Email Transport classes look like.
 */
export default interface IEmailTransport {
  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */
  send(options: IEmailOptions): Promise<any>;
}
