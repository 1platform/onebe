"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.docsHelpers = void 0;

var _DocsStore = _interopRequireDefault(require("./DocsStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const property = (interfaceName, propertyName, type, {
  description = "",
  required = true,
  defaultValue = ""
}) => {
  _DocsStore.default.instance.addInterfaceProperty(interfaceName, {
    name: propertyName,
    type,
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

const docsHelpers = {
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