"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _EntityDefinition = _interopRequireDefault(require("./EntityDefinition"));

var _RouteDefinition = _interopRequireDefault(require("./RouteDefinition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A store where you can document the entities and routes of your application.
 *
 * Inside this store the framework keeps information about what should be passed
 * by whom and where. When needed, the documentation system will extract all the
 * information needed and generate the required documentation.
 */
class MetadataStore {
  /**
   * Entity metadata definition utility.
   */

  /**
   * Route metadata definition utility.
   */

  /**
   * The constructor of the Metadata store
   */
  constructor() {// Do Nothing

    _defineProperty(this, "_entity", new _EntityDefinition.default());

    _defineProperty(this, "_route", new _RouteDefinition.default());
  }
  /**
   * The Metadata Store instance
   */


  /**
   * Getter for the MetadataStore instance.
   */
  static get instance() {
    if (!MetadataStore._instance) {
      MetadataStore._instance = new MetadataStore();
    }

    return MetadataStore._instance;
  }
  /**
   * Getter for the list of entities defined in the application.
   */


  get entities() {
    return this._entity.list;
  }
  /**
   * Getter for the entity metadata definition utility.
   */


  get entity() {
    return this._entity;
  }
  /**
   * Getter for the list of routes defined in the application.
   */


  get routes() {
    return this._route.list;
  }
  /**
   * Getter for the route metadata definition utility.
   */


  get route() {
    return this._route;
  }

}

exports.default = MetadataStore;

_defineProperty(MetadataStore, "_instance", void 0);