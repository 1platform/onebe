"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ContextAPI {
  constructor(request, response, exposeRequest = false, isGet = false) {
    _defineProperty(this, "_exposeRequest", false);

    _defineProperty(this, "_isGet", false);

    _defineProperty(this, "_request", void 0);

    _defineProperty(this, "_response", void 0);

    this._request = request;
    this._response = response;
    this._exposeRequest = exposeRequest;
    this._isGet = isGet;
  }

  get request() {
    if (this._exposeRequest) {
      return this._request;
    }

    return undefined;
  }

  get response() {
    if (this._exposeRequest) {
      return this._response;
    }

    return undefined;
  }

  get parameters() {
    return this._request.params;
  }

  get queryParameters() {
    return this._request.query;
  }

  get headers() {
    return this._request.headers;
  }

  get files() {
    if (this._request.files) {
      return Object.values(this._request.files);
    }

    return this._request.file ? [this._request.file] : [];
  }

  get body() {
    return !this._isGet ? this._request.body : undefined;
  }

  getParameter(name) {
    return this._request.params[name];
  }

  getParameterNumber(name) {
    return Number(this.getParameter(name));
  }

  getQuery(name, defaultValue = "") {
    return this._request.query[name] || defaultValue;
  }

  getQueryString(name, defaultValue = "") {
    return this._request.query[name].toString() || defaultValue;
  }

  getQueryNumber(name, defaultValue = 0) {
    return Number(this.getQueryString(name)) || defaultValue;
  }

  getQueryBoolean(name) {
    return (this.getQueryString(name) ?? "false").toLowerCase() !== "false";
  }

  getQueryArray(name) {
    return this.getQueryString(name) || [];
  }

  getHeader(headerName) {
    return this._request.header(headerName) || undefined;
  }

  setHeader(headerName, value) {
    this._response.header(headerName, value);
  }

  getFiles(fileName) {
    if (fileName && this._request.files && this._request.files[fileName]) {
      return this._request.files[fileName];
    }

    return this._request.file;
  }

  getBody() {
    return this._request.body;
  }

  getBodyProperty(property) {
    return this._request.body[property];
  }

  get appURL() {
    return this._request.appURL;
  }

  get pageURL() {
    return this._request.pageURL;
  }

  get sessionID() {
    return this._request.sessionID;
  }

}

exports.default = ContextAPI;