"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _JWT = require("../Authentication/JWT");

var _Logger = require("../System/Logger");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A class used to expose the Authentication Context information from a request.
 *
 * This context will handle everything related to the authentication and
 * authorisation part of your application.
 */
class AuthContextAPI {
  /**
   * The request object for which the Authentication Context is served.
   */

  /**
   * A store with custom data received from the request object.
   */

  /**
   * Authentication Context constructor.
   *
   * @param request The Request for which we serve the Authentication Context.
   * @param [baseStore] The store with Authentication Data.
   */
  constructor(request, baseStore) {
    _defineProperty(this, "_request", void 0);

    _defineProperty(this, "_authStore", {});

    this._request = request;
    this._authStore = baseStore || {};
  }
  /**
   * Getter for the User object from the request.
   */


  get user() {
    return this._request.user;
  }
  /**
   * Getter for the Bearer token.
   */


  get token() {
    return (0, _JWT.extractToken)(this._request);
  }
  /**
   * Getter for the isAuthenticated flag.
   */


  get isAuthenticated() {
    return this._request.isAuthenticated();
  }
  /**
   * Method used to log the user out from the application.
   */


  logout() {
    if (this._request.logout) {
      this._request.logout(() => {
        (0, _Logger.getDefaultLogger)().debug(`User [${this._request.user.id}] has logged out.`);
      });
    }
  }
  /**
   * Getter function for elements from the authentication store.
   *
   * @param key The key for which you need information.
   */


  get(key) {
    return this._authStore[key];
  }
  /**
   * Setter function for elements into the authentication store.
   *
   * @param key The key on which you set information.
   * @param value The value which you want to store.
   */


  set(key, value) {
    this._authStore[key] = value;
  }

}

exports.default = AuthContextAPI;