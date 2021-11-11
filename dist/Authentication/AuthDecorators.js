"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractUser = exports.bearer = exports.basic = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _App = _interopRequireDefault(require("../App"));

var _RouteUtils = require("../Router/RouteUtils");

var _JWT = require("./JWT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Decorator to enable Bearer Authentication for an endpoint.
 *
 * Attaches to the property of the target the following metadata:
 * - route:auth
 * - route:auth:bearer
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
const bearer = (target, propertyKey, descriptor) => {
  const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
  Reflect.defineMetadata("route:auth", true, target, propertyKey);
  Reflect.defineMetadata("route:auth:bearer", true, target, propertyKey);
  descriptor.value = [_passport.default.authenticate("bearer", {
    session: false
  }), ...original];
};
/**
 * Decorator to enable Basic Authentication for an endpoint.
 *
 * Attaches to the property of the target the following metadata:
 * - route:auth
 * - route:auth:basic
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */


exports.bearer = bearer;

const basic = (target, propertyKey, descriptor) => {
  const original = Array.isArray(descriptor.value) ? descriptor.value : [descriptor.value];
  Reflect.defineMetadata("route:auth", true, target, propertyKey);
  Reflect.defineMetadata("route:auth:basic", true, target, propertyKey);
  descriptor.value = [_passport.default.authenticate("basic", {
    session: false
  }), ...original];
};
/**
 * Middleware used to extract the user from the request when using Bearer Authentication
 * on a mixed route (Public and Protected).
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */


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