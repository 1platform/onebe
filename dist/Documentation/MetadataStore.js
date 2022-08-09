"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EntityDefinition = _interopRequireDefault(require("./EntityDefinition"));

var _RouteDefinition = _interopRequireDefault(require("./RouteDefinition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MetadataStore {
  /**
   * The constructor of the Metadata store
   */
  constructor() {// Do Nothing

    _defineProperty(this, "_entity", new _EntityDefinition.default());

    _defineProperty(this, "_route", new _RouteDefinition.default());
  }
  /**
   * The Docs store instance
   */


  /**
   * Get method to retrieve the Docs store instance
   */
  static get instance() {
    if (!MetadataStore._instance) {
      MetadataStore._instance = new MetadataStore();
    }

    return MetadataStore._instance;
  }

  get entities() {
    return this._entity.list;
  }

  get entity() {
    return this._entity;
  }

  get routes() {
    return this._route.list;
  }

  get route() {
    return this._route;
  }

}

exports.default = MetadataStore;

_defineProperty(MetadataStore, "_instance", void 0);