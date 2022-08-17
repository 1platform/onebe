"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _JWT = require("../Authentication/JWT");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AuthContextAPI {
  constructor(request, baseStore) {
    _defineProperty(this, "_request", void 0);

    _defineProperty(this, "_authStore", {});

    this._request = request;
    this._authStore = baseStore || {};
  }

  get user() {
    return this._request.user;
  }

  get token() {
    return (0, _JWT.extractToken)(this._request);
  }

  get isAuthenticated() {
    return this._request.isAuthenticated();
  }

  logout() {
    if (this._request.logout) {
      this._request.logout();
    }
  }

  get(key) {
    return this._authStore[key];
  }

  set(key, value) {
    this._authStore[key] = value;
  }

}

exports.default = AuthContextAPI;