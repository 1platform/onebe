/**
 * Function used to generate a random numeric code that can be used as a way
 * to check if the real user tried to perform an action or log into their
 * account.
 *
 * @param [size] The length of the MFA code.
 */
export declare function generateNumericCode(size?: number): string;
/**
 * Function used to generate a random string code that can be used as a way
 * to check if the real user tried to perform an action or log into their
 * account.
 */
export declare function generateAlfaCode(): string;
