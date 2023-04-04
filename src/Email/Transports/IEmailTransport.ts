/**
 * A list of options of that can be passed when sending an email throught
 * the Email handling Service.
 */
export interface IEmailOptions {
  /**
   * To whom you want to send the email. One email or a list of emails that will
   * be passed as the TO field of an email.
   */
  to?: string | Array<string>;
  /**
   * From whom is the email. This will appear as the source of the email.
   */
  from?: string;
  /**
   * From whom is the email. This will appear as the source of the email.
   */
  sender?: string;
  /**
   * To whom you want to send a Carbon Copy of the email. One email or a list of emails
   * that will be passed as the CC field of an email.
   */
  cc?: string | Array<string>;
  /**
   * To whom you want to send a Blind Carbon Copy of the email. One email or a list of emails
   * that will be passed as the BCC field of an email. The emails added in this field won't
   * appear in the email address list.
   */
  bcc?: string | Array<string>;
  /**
   * If you want to receive a reply from the person that received the email you sent
   * through the application, the `replyTo` field will need a valid email address.
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
  /**
   * A list with all attachments that will be sent in the email.
   */
  attachments?: string[];
}

/**
 * How should the Email Transport classes look like.
 */
export default interface IEmailTransport {
  /**
   * Method used to send emails.
   *
   * @param options The parameters you have to use when sending an email.
   */
  send(options: IEmailOptions): Promise<any>;
}
