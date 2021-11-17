import formatter from "string-format";
/**
 * Generates a ShortID that can be used for various things.
 */
export declare const shortid: () => string;
/**
 * Generate an UUID V1 code.
 */
export declare const uuidV1: () => string;
/**
 * Generate an UUID V4 code.
 */
export declare const uuidV4: () => string;
/**
 * Encrypt a password using the hash function from bcryptjs.
 *
 * @param password The password to be encrypted.
 * @param saltSize The size of the salt.
 */
export declare const encryptPassword: (password: string, saltSize?: number) => string;
/**
 * Compares an encrypted password with the one entered by the user.
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
