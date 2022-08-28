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
/**
 * Converts string into camelCase.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Camel Cased.
 * @param firstCapital Flag to mark the first letter as a capital one.
 */
export declare function camelCase(str: string, firstCapital?: boolean): string;
/**
 * Converts string into snake_case.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Snake Cased.
 * @param [separator] A separator to be used when converting to snake_case.
 */
export declare function snakeCase(str: string, separator?: string): string;
/**
 * Converts string into Title Case.
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be Title Cased
 */
export declare function titleCase(str: string): string;
/**
 * Builds abbreviated string from given string;
 *
 * @see https://github.com/typeorm/typeorm/blob/master/src/util/StringUtils.ts
 * @param str The string to be abbreviated.
 * @param abbrLettersCount How many letters to be used for the abbreviation.
 */
export declare function abbreviate(str: string, abbrLettersCount?: number): string;
/**
 * Generate a slug based on the given string.
 *
 * @param str The string to be converted to a slug.
 */
export declare function slugify(str: string): string;
