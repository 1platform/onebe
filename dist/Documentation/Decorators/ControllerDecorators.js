"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = Controller;
exports.Description = Description;
exports.Name = Name;

var _MetadataStore = _interopRequireDefault(require("../MetadataStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator used to document a controller.
 *
 * Use this decorator when you want to specifically mark a class as a controller
 * in the documentation. Otherwise, by using the @Path decorator you can add
 * the same documentation elements like this decorator.
 *
 * @decorator
 * @param name The name of the controller.
 * @param [description] A short description of the controller.
 */
function Controller(name, description) {
  return function (BaseClass) {
    _MetadataStore.default.instance.route.setName(BaseClass.name, name);

    _MetadataStore.default.instance.route.setDescription(BaseClass.name, description);

    return BaseClass;
  };
}
/**
 * Decorator used to give a name to a controller.
 *
 * Use this decorator when you want to specifically give a name to a controller.
 * Otherwise, by using the @Path decorator you can add the same documentation
 * elements like this decorator.
 *
 * @decorator
 * @param name The name of the controller.
 */


function Name(name) {
  return function (BaseClass) {
    _MetadataStore.default.instance.route.setName(BaseClass.name, name);

    return BaseClass;
  };
}
/**
 * Decorator used to give a description to a controller.
 *
 * Use this decorator when you want to specifically give a description to a controller.
 * Otherwise, by using the @Path decorator you can add the same documentation
 * elements like this decorator.
 *
 * @decorator
 * @param [description] A short description of the controller.
 */


function Description(description) {
  return function (BaseClass) {
    _MetadataStore.default.instance.route.setDescription(BaseClass.name, description);

    return BaseClass;
  };
}