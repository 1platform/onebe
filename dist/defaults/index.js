"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("./api"));

var _app = _interopRequireDefault(require("./app"));

var _auth = _interopRequireDefault(require("./auth"));

var _db = _interopRequireDefault(require("./db"));

var _docs = _interopRequireDefault(require("./docs"));

var _email = _interopRequireDefault(require("./email"));

var _http = _interopRequireDefault(require("./http"));

var _i18n = _interopRequireDefault(require("./i18n"));

var _logs = _interopRequireDefault(require("./logs"));

var _sms = _interopRequireDefault(require("./sms"));

var _upload = _interopRequireDefault(require("./upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The configuration object, with some default values, that can be used
 * in the application for configuring the behaviour of the application.
 */
const defaultConfig = {
  api: _api.default,
  app: _app.default,
  auth: _auth.default,
  db: _db.default,
  docs: _docs.default,
  email: _email.default,
  http: _http.default,
  i18n: _i18n.default,
  logs: _logs.default,
  sms: _sms.default,
  upload: _upload.default
};
var _default = defaultConfig;
exports.default = _default;