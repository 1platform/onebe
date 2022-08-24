"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Logger = require("../../System/Logger");

var _BaseTransport = _interopRequireDefault(require("./BaseTransport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transport class that can be used for testing email sending.
 * !!!DO NOT USE IN PRODUCTION!!!
 */
class TestTransport extends _BaseTransport.default {
  /**
   * Transport constructor.
   */
  constructor() {
    super(null);

    _nodemailer.default.createTestAccount().then(account => {
      this._transporter = _nodemailer.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });
    });
  }
  /**
   * Method used to send emails.
   *
   * @param options The parameters we use for sending an email.
   */


  async send(options) {
    const info = await super.send(options);
    (0, _Logger.getDefaultLogger)().debug(`Preview URL: ${_nodemailer.default.getTestMessageUrl(info)}`);
    return info;
  }

}

exports.default = TestTransport;