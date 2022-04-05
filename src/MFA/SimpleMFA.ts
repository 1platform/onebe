import { fixedSizeRandom } from "../Utils/NumberUtils";
import { shortid } from "../Utils/StringUtils";

/**
 * Generate a numeric MFA code.
 *
 * @param size The length of the MFA code.
 */
export function generateNumericCode(size = 6): string {
  return fixedSizeRandom(size);
}

/**
 * Returns an AlphaNumeric MFA Code.
 */
export function generateAlfaCode(): string {
  return shortid();
}
