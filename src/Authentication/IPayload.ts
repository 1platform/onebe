/**
 * The payload that we store in a JWT Token.
 */
export default interface IPayload {
  /**
   * The ID of the user.
   */
  userId: string;

  /**
   * Any other property that might be stored in the payload.
   */
  [key: string]: any;
}
