import { fixedSizeRandom } from "@/Utils/Number";
import { shortid } from "@/Utils/String";

/**
 * Function used to generate a random numeric code that can be used as a way
 * to check if the real user tried to perform an action or log into their
 * account.
 *
 * @param [size] The length of the MFA code.
 */
export function generateNumericCode(size = 6): string {
  return fixedSizeRandom(size);
}

/**
 * Function used to generate a random string code that can be used as a way
 * to check if the real user tried to perform an action or log into their
 * account.
 */
export function generateAlfaCode(): string {
  return shortid();
}
