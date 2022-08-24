import { compareSync, hashSync } from "bcryptjs";
import shortId from "shortid";
import formatter from "string-format";
import * as uuid from "uuid";
import { stripHtml } from "string-strip-html";

/**
 * Generator for a ShortID that can be used for various things.
 */
export const shortid = (): string => shortId.generate();

/**
 * Generator for a UUID V1 code.
 */
export const uuidV1 = (): string => uuid.v1();

/**
 * Generator for a UUID V4 code.
 */
export const uuidV4 = (): string => uuid.v4();

/**
 * Method used to encrypt a password using the hash function from bcryptjs.
 *
 * @param password The password to be encrypted.
 * @param saltSize The size of the salt.
 */
export const encryptPassword = (password: string, saltSize = 10): string => hashSync(password, saltSize);

/**
 * Method used to compare an encrypted password with the one entered by the user.
 *
 * @param password The password to be compared.
 * @param encryptedPassword The encrypted password,
 */
export const comparePassword = (password: string, encryptedPassword: string): boolean => compareSync(password, encryptedPassword);

export {
  /**
   * String formatter utility.
   *
   * @see {@link https://www.npmjs.com/package/string-format}
   */
  formatter,
};

/**
 * Strips the HTML tags from a given text.
 *
 * @param text The text to be striped.
 */
export const stripHTML = (text: string): string => stripHtml(text).result;
