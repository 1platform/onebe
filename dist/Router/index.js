"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RouterBase = void 0;

var _express = require("express");

var _fs = require("fs");

var _path = require("path");

var _Logger = _interopRequireDefault(require("../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RouterBase {
  constructor() {
    _defineProperty(this, "_controllers", []);

    _defineProperty(this, "_router", (0, _express.Router)());
  }

  get router() {
    return this._router;
  }

  async register(controllersPath) {
    const controllersStruct = this.fetchControllers(controllersPath);
    controllersStruct.section = "";
    await this.registerControllers(controllersPath, controllersStruct);
  }

  async registerControllers(basePath, structure) {
    _Logger.default.info(`[REGISTER] Controllers in section: ${structure.section || "DEFAULT"}`);

    const sectionPath = (0, _path.join)(basePath, structure.section);

    for (const controllerFile of structure.controllers) {
      const modulePath = (0, _path.resolve)(sectionPath, controllerFile);

      try {
        let ClassModule = await Promise.resolve(`${modulePath}`).then(s => _interopRequireWildcard(require(s)));
        ClassModule = ClassModule.default || ClassModule;

        if (!ClassModule || typeof ClassModule === "function" && !ClassModule.prototype) {
          continue;
        }

        const controller = new ClassModule();

        this._controllers.push(controller);
      } catch (err) {
        /* Since we might register folders that have API class defined in them
           and since they are ES6+ Classes, we cannot call them directly. */
        _Logger.default.error(`Unable to register the controller exposed by '${modulePath}'.`);

        _Logger.default.debug(err.message);

        _Logger.default.debug(err.stack);
      }
    }

    for (const child of structure.children) {
      await this.registerControllers(sectionPath, child);
    }
  }

  fetchControllers(basePath) {
    const files = (0, _fs.readdirSync)(basePath);
    const controllers = files.filter(file => [".ts", ".js", ".tsx", ".jsx"].indexOf((0, _path.extname)(file)) >= 0);
    const folders = files.filter(file => [".ts", ".js", ".tsx", ".jsx"].indexOf((0, _path.extname)(file)) < 0).map(file => (0, _path.join)(basePath, file)).filter(file => (0, _fs.statSync)(file).isDirectory());
    const children = folders.map(folder => this.fetchControllers(folder)).filter(child => child.children.length > 0 || child.controllers.length > 0);
    return {
      section: (0, _path.basename)(basePath),
      controllers,
      children
    };
  }

}

exports.RouterBase = RouterBase;
const Router = new RouterBase();
var _default = Router;
exports.default = _default;