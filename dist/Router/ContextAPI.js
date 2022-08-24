"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Endpoint request Context information class.
 *
 * Through this class you can interact with the data received from your users. This Context API allows
 * you to get data from the Parameters, Query Parameters or Body easily, through specific methods
 * and specific data types.
 */
class ContextAPI {
  /**
   * Flag to let the Context API know if you need the request object exposed in the endpoint method or not.
   */

  /**
   * Flag to let the Context API know that the request is a GET request.
   */

  /**
   * The request object for which you need context.
   */

  /**
   * The response object for which you need context.
   */

  /**
   * Context API constructor.
   *
   * @param request The request object for which you need context.
   * @param response The response object for which you need context.
   * @param [exposeRequest] Flag to let the Context API know if you need the request object exposed in the endpoint method or not.
   * @param [isGet] Flag to let the Context API know that the request is a GET request.
   */
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
  /**
   * Getter for the request object. If the flag `exposeRequest` is set to false, the getter will
   * return undefined.
   */


  get request() {
    return this._exposeRequest ? this._request : undefined;
  }
  /**
   * Getter for the response object. If the flag `exposeRequest` is set to false, the getter will
   * return undefined.
   */


  get response() {
    return this._exposeRequest ? this._response : undefined;
  }
  /**
   * Getter for the list of URL Parameters exposed by the endpoint.
   */


  get parameters() {
    return this._request.params;
  }
  /**
   * Getter for the list of Query Parameters exposed by the endpoint.
   */


  get queryParameters() {
    return this._request.query;
  }
  /**
   * Getter for the list of Headers exposed by the endpoint.
   */


  get headers() {
    return this._request.headers;
  }
  /**
   * Getter for the list of files uploaded through the Endpoint.
   */


  get files() {
    if (this._request.files) {
      return Object.values(this._request.files);
    }

    return this._request.file ? [this._request.file] : [];
  }
  /**
   * Getter for the Body of the request. If the request is a GET one, then it will return undefined.
   */


  get body() {
    return !this._isGet ? this._request.body : undefined;
  }
  /**
   * Getter for the Application URL from the request.
   */


  get appURL() {
    return this._request.appURL;
  }
  /**
   * Getter for the Page URL from the request.
   */


  get pageURL() {
    return this._request.pageURL;
  }
  /**
   * Getter for the session ID of the request.
   */


  get sessionID() {
    return this._request.sessionID;
  }
  /**
   * Method used to get the value of a URL Parameter by its name.
   *
   * @param name The name of the parameter.
   */


  getParameter(name) {
    return this._request.params[name];
  }
  /**
   * Method used to get a numeric URL Parameter by its name.
   *
   * @param name The name of the parameter.
   */


  getParameterNumber(name) {
    return Number(this.getParameter(name));
  }
  /**
   * Method used to get the value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   * @param defaultValue The default value of the parameter.
   */


  getQuery(name, defaultValue = "") {
    return this._request.query[name] || defaultValue;
  }
  /**
   * Method used to get the string value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   * @param defaultValue The default value of the parameter.
   */


  getQueryString(name, defaultValue = "") {
    return this._request.query[name].toString() || defaultValue;
  }
  /**
   * Method used to get the numeric value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   * @param defaultValue The default value of the parameter.
   */


  getQueryNumber(name, defaultValue = 0) {
    return Number(this.getQueryString(name)) || defaultValue;
  }
  /**
   * Method used to get the boolean value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   */


  getQueryBoolean(name) {
    let value = this.getQueryString(name) ?? "false";

    if (value === "0" || value === "1") {
      value = (value === "1").toString();
    }

    return value.toLowerCase() !== "false";
  }
  /**
   * Method used to get the array value of a Query Parameter by its name.
   *
   * @param name The name of the parameter.
   */


  getQueryArray(name) {
    return this.getQueryString(name) || [];
  }
  /**
   * Method used to get the header value from the request.
   *
   * @param headerName The name of the header value needed.
   */


  getHeader(headerName) {
    return this._request.header(headerName) || undefined;
  }
  /**
   * Method used to set a header value for the response.
   *
   * @param headerName The name of the header for which you set the value.
   * @param value The value you want to set.
   */


  setHeader(headerName, value) {
    this._response.header(headerName, value);
  }
  /**
   * Method used to get a file by its name from the request. When using the single upload
   * middleware, you can skip the fileName parameter.
   *
   * @param [fileName] The name of the file. When using the single file upload middleware, you can skip the parameter.
   */


  getFiles(fileName) {
    if (fileName && this._request.files && this._request.files[fileName]) {
      return this._request.files[fileName];
    }

    return this._request.file;
  }
  /**
   * Method used to get the contents of the body as the given type passed when defining the endpoint.
   */


  getBody() {
    return this._request.body;
  }
  /**
   * Method used to get a property from the body using a name and a specific type.
   *
   * @param property The property we want from the body.
   */


  getBodyProperty(property) {
    return this._request.body[property];
  }

}

exports.default = ContextAPI;