import formatter from "string-format";
/**
 * Generator for a ShortID that can be used for various things.
 */
export declare const shortid: () => string;
/**
 * Generator for a UUID V1 code.
 */
export declare const uuidV1: () => string;
/**
 * Generator for a UUID V4 code.
 */
export declare const uuidV4: () => string;
/**
 * Method used to encrypt a password using the hash function from bcryptjs.
 *
 * @param password The password to be encrypted.
 * @param saltSize The size of the salt.
 */
export declare const encryptPassword: (password: string, saltSize?: number) => string;
/**
 * Method used to compare an encrypted password with the one entered by the user.
 *
 * @param password The password to be compared.
 * @param encryptedPassword The encrypted password,
 */
export declare const comparePassword: (password: string, encryptedPassword: string) => boolean;
export { 
/**
 * String formatter utility.
 *
 * @see {@link https://www.npmjs.com/package/string-format}
 */
formatter, };
/**
 * Strips the HTML tags from a given text.
 *
 * @param text The text to be striped.
 */
export declare const stripHTML: (text: string) => string;
