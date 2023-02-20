import { compareSync, hashSync } from "bcryptjs";
import shortId from "shortid";
import formatter from "string-format";
import * as uuid from "uuid";
import { stripHtml } from "string-strip-html";
import { camelCase as _camelCase } from "lodash";
import { random } from "@/Utils/NumberUtils";

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

/**
 * Converts string into camelCase.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Camel Cased.
 * @param firstCapital Flag to mark the first letter as a capital one.
 */
export function camelCase(str: string, firstCapital = false): string {
  let convertedValue = _camelCase(str);
  if (firstCapital) {
    convertedValue = `${ convertedValue.substring(0, 1).toUpperCase() }${ convertedValue.substring(1) }`;
  }
  return convertedValue;
}

/**
 * Converts string into snake_case.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Snake Cased.
 * @param [separator] A separator to be used when converting to snake_case.
 */
export function snakeCase(str: string, separator = "_"): string {
  return (
    str
      // ABc -> a_bc
      .replace(/([A-Z])([A-Z])([a-z])/g, `$1${ separator }$2$3`)
      // aC -> a_c
      .replace(/([a-z0-9])([A-Z])/g, `$1${ separator }$2`)
      .toLowerCase()
  );
}

/**
 * Converts string into Title Case.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Title Cased
 */
export function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
}

/**
 * Builds abbreviated string from given string;
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be abbreviated.
 * @param abbrLettersCount How many letters to be used for the abbreviation.
 */
export function abbreviate(str: string, abbrLettersCount = 1): string {
  const words = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").split(" ");
  return words.reduce((res, word) => {
    res += word.substring(0, abbrLettersCount);
    return res;
  }, "");
}

/**
 * Generate a slug based on the given string.
 *
 * @param str The string to be converted to a slug.
 */
export function slugify(str: string): string {
  const words = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2").split(" ");
  return words.map((word) => word.toLowerCase()).join("-");
}

const randomStringAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";

/**
 * Function used to generate a random string with a given length.
 *
 * @param [length] The length of the final string.
 */
export function randomString(length = 10): string {
  const randomString = [];
  for (let iPosition = 0; iPosition < length; iPosition++) {
    randomString.push(randomStringAlphabet.charAt(random(0, randomStringAlphabet.length)));
  }

  return randomString.join("");
}
