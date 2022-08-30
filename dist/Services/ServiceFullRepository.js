"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HTTPError = _interopRequireDefault(require("../Exceptions/HTTPError"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _ServiceReadRepository = _interopRequireDefault(require("./ServiceReadRepository"));

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
class ServiceFullRepository extends _ServiceReadRepository.default {
  /**
   * Method used to create a new entity.
   *
   * @param data The data to be stored.
   */
  async create(data) {
    const validatedData = this.validator ? this.validate(_objectSpread(_objectSpread({}, data), {}, {
      id: undefined
    })) : _objectSpread(_objectSpread({}, data), {}, {
      id: undefined
    });
    const result = this.repository.create(validatedData);
    return this.repository.save(result);
  }
  /**
   * Method used to update an existing entity.
   *
   * @param itemId The ID of the element to be updated.
   * @param data The data to be stored.
   */


  async update(itemId, data) {
    const entity = await this.get(itemId);
    const validatedData = this.validator ? this.validate(_objectSpread(_objectSpread(_objectSpread({}, entity), data), {}, {
      id: undefined
    })) : _objectSpread(_objectSpread({}, data), {}, {
      id: undefined
    });
    Object.keys(validatedData).forEach(key => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      entity[key] = validatedData[key];
    });
    return this.repository.save(entity);
  }
  /**
   * Method used to delete an entity.
   *
   * @param itemId The ID of the element to be updated.
   */


  async delete(itemId) {
    const entity = await this.repository.findOne(itemId);

    if (!entity) {
      throw new _HTTPError.default("onebe.errors.entity.not-found", _HTTPStatus.default.NOT_FOUND, {
        key: itemId,
        name: this.repository.metadata.name
      });
    }

    await this.repository.remove(entity);
    return entity;
  }

}

exports.default = ServiceFullRepository;