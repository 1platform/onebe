"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formatter", {
  enumerable: true,
  get: function () {
    return _stringFormat.default;
  }
});
exports.uuidV4 = exports.uuidV1 = exports.shortid = void 0;

var _shortid = _interopRequireDefault(require("shortid"));

var _stringFormat = _interopRequireDefault(require("string-format"));

var uuid = _interopRequireWildcard(require("uuid"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a ShortID that can be used for various things.
 */
const shortid = () => _shortid.default.generate();
/**
 * Generate an UUID V1 code.
 */


exports.shortid = shortid;

const uuidV1 = () => uuid.v1();
/**
 * Generate an UUID V4 code.
 */


exports.uuidV1 = uuidV1;

const uuidV4 = () => uuid.v4();

exports.uuidV4 = uuidV4;