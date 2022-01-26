"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _path = _interopRequireDefault(require("path"));

var _App = _interopRequireDefault(require("./App"));

var _Passport = _interopRequireDefault(require("./Authentication/Passport"));

require("./custom");

var _DB = _interopRequireDefault(require("./DB"));

var _HTTP = _interopRequireDefault(require("./HTTP"));

var _i18n = _interopRequireDefault(require("./i18n"));

var _Router = _interopRequireDefault(require("./Router"));

var _Scheduler = _interopRequireDefault(require("./Scheduler"));

var _Config = _interopRequireDefault(require("./System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultValues = {
  currentDir: process.cwd(),
  configDir: "./config",
  controllersDir: "./controllers",
  noDBConnection: false
};
/**
 * Framework init function. It initializes some elements of the framework
 * to be later used when starting the application up.
 *
 * @param props The various properties you can pass to the init function.
 */

async function init(props) {
  props = _objectSpread(_objectSpread({}, defaultValues), props);

  _Config.default.init(_path.default.resolve(props.currentDir, props.configDir));

  _App.default.use(_HTTP.default);

  _App.default.use(_Scheduler.default);

  await (0, _i18n.default)(props.currentDir);

  if (!props.noDBConnection) {
    await (0, _DB.default)();
  }

  return strategyProps => {
    (0, _Passport.default)(_objectSpread(_objectSpread({}, props), strategyProps || {}));
    return _Router.default.register(_path.default.resolve(props.currentDir, props.controllersDir)).then(() => {
      _App.default.Scheduler.run();

      _App.default.HTTP.start();
    });
  };
}