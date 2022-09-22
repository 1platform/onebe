/**
 * A list with the supported authentication methods that can be used in your application.
 *
 * @enum
 */
enum AuthenticationMethod {
  /**
   * Basic authentication method.
   */
  BASIC = "BasicAuth",
  /**
   * Bearer authentication method.
   */
  BEARER = "BearerAuth",
  /**
   * OpenID authentication method.
   */
  OPENID = "OpenIDAuth",
  /**
   * Custom authentication method.
   */
  CUSTOM = "CustomAuth",
}

export default AuthenticationMethod;
