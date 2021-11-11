import shortId from "shortid";
import formatter from "string-format";
import * as uuid from "uuid";

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

export {
  /**
   * String formatter utility.
   *
   * @see {@link https://www.npmjs.com/package/string-format}
   */
  formatter,
};
