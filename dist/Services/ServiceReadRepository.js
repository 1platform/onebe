"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceWithRepository = _interopRequireDefault(require("./ServiceWithRepository"));

var _HTTPError = _interopRequireDefault(require("../Exceptions/HTTPError"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _PaginationDefinition = require("./PaginationDefinition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The base class for your services that are using a database table.
 *
 * We recommend using a service with repository attached to perform all the actions in your application
 * that need working with a database.
 */
class ServiceReadRepository extends _ServiceWithRepository.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "primaryKey", "id");
  }

  /**
   * Method used to get all the data from the repository, based on the
   * filters sent as parameters.
   *
   * @param [options] A list with options to be used when getting the data.
   */
  getAll(options) {
    return this.repository.find(options);
  }
  /**
   * Method used to get the paginated data from the repository, based on the
   * filters sent as parameters.
   *
   * @param paginatedOptions A list with parameters needed for pagination.
   */


  async getAllPaginated(paginatedOptions) {
    const {
      page,
      size,
      options
    } = this._getPaginatedOptions(paginatedOptions);

    const count = await this.repository.count(options);
    const data = await this.getAll(_objectSpread({
      skip: size > 0 ? size * (page - 1) : 0,
      take: size > 0 ? size : count
    }, options));
    return new _PaginationDefinition.PaginatedEntity({
      page,
      size: size > 0 ? size : count,
      count,
      data,
      hasNext: size > 0 ? page * size <= count : false,
      hasPrevious: size > 0 ? page > 1 : false
    });
  }
  /**
   * Method used to get a single element, based on the filters sent
   * as parameters.
   *
   * @param where The where clause to be used to fetch the data.
   * @param [options] Extra options to be used for finding the data.
   */


  async get(where, options) {
    const entity = await this.repository.findOne(_objectSpread(_objectSpread({}, options || {}), {}, {
      where
    }));

    if (!entity) {
      throw new _HTTPError.default("onebe.errors.entity.not-found", _HTTPStatus.default.NOT_FOUND, {
        name: this.repository.metadata.name
      });
    }

    return entity;
  }
  /**
   * Method used to get a single element, based on the primary key of the entity.
   *
   * @param entityKey The primary key value after which we search.
   * @param [options] Extra options to be used for finding the data.
   */


  async getByKey(entityKey, options) {
    const entity = await this.repository.findOne(_objectSpread(_objectSpread({}, options || {}), {}, {
      where: {
        [this.primaryKey]: entityKey
      }
    }));

    if (!entity) {
      throw new _HTTPError.default("onebe.errors.entity.not-found", _HTTPStatus.default.NOT_FOUND, {
        key: entityKey,
        name: this.repository.metadata.name
      });
    }

    return entity;
  }
  /**
   * Method used to get the pagination information from the pagination options
   * sent by the user.
   *
   * @param paginatedOptions The pagination options.
   */


  _getPaginatedOptions(paginatedOptions) {
    const parsedOptions = new _PaginationDefinition.PaginatedOptions(_objectSpread({
      page: 1,
      size: 10,
      options: {}
    }, paginatedOptions));

    if (parsedOptions.page < 1) {
      parsedOptions.page = 1;
    }

    if (parsedOptions.size < 0) {
      parsedOptions.size = 0;
    }

    return parsedOptions;
  }

}

exports.default = ServiceReadRepository;