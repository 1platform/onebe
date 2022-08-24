"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceBase = _interopRequireDefault(require("./ServiceBase"));

var _DB = require("../DB");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The base class for your services that are using a database table.
 *
 * We recommend using a service with repository attached to perform all the actions in your application
 * that need working with a database.
 */
class ServiceWithRepository extends _ServiceBase.default {
  /**
   * The repository created by TypeORM for the entity used in the repository.
   */

  /**
   * The datasource used for the repository.
   */

  /**
   * Service constructor.
   *
   * @param entity The entity for which we want to create the repository.
   * @param [dataSource] The datasource on which to create the repository.
   */
  constructor(entity, dataSource) {
    super();

    _defineProperty(this, "_repository", void 0);

    _defineProperty(this, "_dataSource", void 0);

    this._dataSource = dataSource ?? (0, _DB.defaultConnection)();
    this._repository = this.dataSource.getRepository(entity);
  }
  /**
   * Getter for the repository attached to the service.
   */


  get repository() {
    return this._repository;
  }
  /**
   * Getter for the datasource attached to the service.
   */


  get dataSource() {
    return this._dataSource;
  }

}

exports.default = ServiceWithRepository;