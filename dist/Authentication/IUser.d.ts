/**
 * The minimal required information about a User.
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
