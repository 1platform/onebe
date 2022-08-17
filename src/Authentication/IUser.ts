/**
 * The basic information exposed by the application regarding a user.
 *
 * This interface allows you to extend the data that you store in the
 * request object when a user is deserialized from the authentication
 * method.
 */
export default interface IUser {
  /**
   * The Identification element of the User.
   */
  id: any;

  /**
   * Iterator for all other properties that can be added to the User interface.
   */
  [key: string]: any;
}
