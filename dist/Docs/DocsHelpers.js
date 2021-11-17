"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docsHelpers = void 0;

var _DocsStore = _interopRequireDefault(require("./DocsStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interface property definition method.
 *
 * @param interfaceName The name of the interface we want to add documentation to.
 * @param propertyName The name of the property we want to document.
 * @param type The data type of the property.
 * @param options The options passed to the documentation engine.
 */
const property = (interfaceName, propertyName, type, {
  description = "",
  required = true,
  defaultValue = "",
  schema = undefined
}) => {
  _DocsStore.default.instance.addInterfaceProperty(interfaceName, {
    name: propertyName,
    type,
    schema: schema || undefined,
    description: description || "",
    required: required ?? true,
    default: defaultValue || undefined
  });

  return {
    property: (propertyName, type, options) => {
      return property(interfaceName, propertyName, type, options);
    }
  };
};
/**
 * Documentation helper function to document interfaces and properties.
 */


const docsHelpers = {
  /**
   * Interface definition method.
   *
   * @param name The name of the interface we want to document.
   * @param description The description of the interface.
   */
  interface: (name, description) => {
    _DocsStore.default.instance.defineInterface(name, description);

    return {
      property: (propertyName, type, options) => {
        return property(name, propertyName, type, options);
      }
    };
  },
  property
};
exports.docsHelpers = docsHelpers;