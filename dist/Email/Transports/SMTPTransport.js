"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _BaseTransport = _interopRequireDefault(require("./BaseTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SMTPTransport extends _BaseTransport.default {
  constructor() {
    super();
    this._transporter = _nodemailer.default.createTransport({
      host: _Config.default.string("email.config.server"),
      port: _Config.default.number("email.config.port", 587),
      secure: _Config.default.boolean("email.config.secure"),
      auth: {
        user: _Config.default.string("email.config.address"),
        pass: _Config.default.string("email.config.password")
      }
    });
  }

}

exports.default = SMTPTransport;