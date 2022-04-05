import { compareSync, hashSync } from "bcryptjs";
import shortId from "shortid";
import formatter from "string-format";
import * as uuid from "uuid";
import { stripHtml } from "string-strip-html";

/**
 * Generates a ShortID that can be used for various things.
 */
export const shortid = (): string => shortId.generate();

/**
 * Generate an UUID V1 code.
 */
export const uuidV1 = (): string => uuid.v1();

/**
 * Generate an UUID V4 code.
 */
export const uuidV4 = (): string => uuid.v4();

/**
 * Encrypt a password using the hash function from bcryptjs.
 *
 * @param password The password to be encrypted.
 * @param saltSize The size of the salt.
 */
export const encryptPassword = (password: string, saltSize = 10): string =>
  hashSync(password, saltSize);

/**
 * Compares an encrypted password with the one entered by the user.
 *
 * @param password The password to be compared.
 * @param encryptedPassword The encrypted password,
 */
export const comparePassword = (
  password: string,
  encryptedPassword: string
): boolean => compareSync(password, encryptedPassword);

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
