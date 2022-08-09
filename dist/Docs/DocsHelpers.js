"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docsHelpers = void 0;

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

var _EntityMetadata = require("../Documentation/Definition/EntityMetadata");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interface property definition method.
 *
 * @deprecated
 * @param interfaceName The name of the interface we want to add documentation to.
 * @param propertyName The name of the property we want to document.
 * @param type The data type of the property.
 * @param options The options passed to the documentation engine.
 */
const property = (interfaceName, propertyName, type, {
  description = "",
  required = true,
  defaultValue = "",
  enumOptions = undefined,
  schema = undefined
}) => {
  _MetadataStore.default.instance.entity.property(interfaceName, propertyName, {
    dataType: _EntityMetadata.EntityPropertyDataTypes[type.toString()] || _EntityMetadata.EntityPropertyDataTypes.STRING,
    description,
    reference: schema,
    required
  });

  return {
    property: (propertyName, type, options) => {
      return property(interfaceName, propertyName, type, options || {});
    }
  };
};
/**
 * Documentation helper function to document interfaces and properties.
 *
 * @deprecated
 */


const docsHelpers = {
  /**
   * Interface definition method.
   *
   * @deprecated
   * @param name The name of the interface we want to document.
   * @param description The description of the interface.
   */
  interface: (name, description) => {
    _MetadataStore.default.instance.entity.add(name, description);

    return {
      property: (propertyName, type, options) => {
        return property(name, propertyName, type, options || {});
      }
    };
  },
  property
};
exports.docsHelpers = docsHelpers;