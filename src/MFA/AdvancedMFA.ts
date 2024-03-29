import * as QRCode from "qrcode";
import speakeasy from "speakeasy";

import app from "@/App";

/**
 * Multi-Factor Authentication configuration object that is used when configuring
 * the Advanced MFA system for a specific user.
 */
export interface IMFAConfiguration {
  /**
   * The OneTimp Password (OTP) Authentication URL
   */
  otpAuthUrl: string;
  /**
   * The Base32 code that needs to be stored next to the user.
   */
  base32: string;
}

/**
 * A service used to enable an Advanced MFA system to authenticate users through
 * an authentication application like Google Authenticator, Microsoft Authenticator etc.
 *
 * This class provides you with everything needed to easily implement the MFA using an
 * authenticator app (QRCode, OTP verifications etc).
 */
export class AdvancedMFA {
  /**
   * Returns the MFA Configuration that you can reuse in your application.
   */
  public getMFAConfig(): IMFAConfiguration {
    const secretCode = speakeasy.generateSecret({
      name: app.app.name,
    });
    return {
      otpAuthUrl: secretCode.otpauth_url,
      base32: secretCode.base32,
    };
  }

  /**
   * Generates a QR Code for the given OTPAuth URL.
   *
   * @param otpAuthURL The OTPAuth URL we want to generate a QRCode for.
   */
  public getQRCode(otpAuthURL: string): Promise<Buffer> {
    return QRCode.toBuffer(otpAuthURL);
  }

  /**
   * Verifies a given MFA Authentication Code.
   *
   * @param authenticationCode The code generated by the Authenticator application.
   * @param userSecretMFACode The code use by the user to generate MFA codes.
   */
  public verifyAuthenticationCode(authenticationCode: string, userSecretMFACode: string): boolean {
    return speakeasy.totp.verify({
      secret: userSecretMFACode,
      encoding: "base32",
      token: authenticationCode,
    });
  }
}
