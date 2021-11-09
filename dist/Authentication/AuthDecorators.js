"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwt = exports.extractUser = exports.basic = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _App = _interopRequireDefault(require("../App"));

var _RouteUtils = require("../Router/RouteUtils");

var _JWT = require("./JWT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const jwt = (target, propertyKey, descriptor) => {
  const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
  Reflect.defineMetadata("route:auth", true, target, propertyKey);
  Reflect.defineMetadata("route:auth:jwt", true, target, propertyKey);
  descriptor.value = [_passport.default.authenticate("jwt", {
    session: false
  }), ...original];
};

exports.jwt = jwt;

const basic = (target, propertyKey, descriptor) => {
  const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
  Reflect.defineMetadata("route:auth", true, target, propertyKey);
  Reflect.defineMetadata("route:auth:basic", true, target, propertyKey);
  descriptor.value = [_passport.default.authenticate("basic", {
    session: false
  }), ...original];
};

exports.basic = basic;
const extractUser = (0, _RouteUtils.defineMiddleware)((req, res, next) => {
  const token = (0, _JWT.extractToken)(req);

  try {
    if (!(0, _JWT.verify)(token)) {
      return next();
    }
  } catch (err) {
    return next();
  }

  const decodedToken = (0, _JWT.decode)(token);

  if ("deserializeUser" in _App.default) {
    _App.default.deserializeUser(decodedToken, (err, user) => {
      if (!err) {
        req.user = user;
      }

      next();
    });

    return;
  }

  req.user = _objectSpread(_objectSpread({}, decodedToken), {}, {
    id: decodedToken.userId || decodedToken
  });
  next();
});
exports.extractUser = extractUser;