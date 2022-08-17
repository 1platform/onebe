"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RouterBase = void 0;

var _express = require("express");

var _fs = require("fs");

var _path = require("path");

var _Logger = require("../System/Logger");

var _ContextAPI = _interopRequireDefault(require("./ContextAPI"));

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

var _AuthContextAPI = _interopRequireDefault(require("./AuthContextAPI"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _RouteUtils = require("./RouteUtils");

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

var _Config = _interopRequireDefault(require("../System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RouterBase {
  constructor() {
    _defineProperty(this, "_controllers", []);

    _defineProperty(this, "_router", (0, _express.Router)());
  }

  /**
   * The getter for the base router we will use.
   */
  get router() {
    return this._router;
  }
  /**
   * Register the controllers in the given path.
   *
   * @param controllersPath The path from which we will import controllers.
   */


  async register(controllersPath) {
    const controllersStruct = this.fetchControllers(controllersPath);
    controllersStruct.section = "";
    await this.registerControllers(controllersPath, controllersStruct);
  }
  /**
   * Register a controller
   *
   * @param controller
   */


  async add(controller) {
    if (_MetadataStore.default.instance.route.isDocs(controller.constructor.name) && !_Config.default.boolean("docs.expose")) {
      (0, _Logger.getDefaultLogger)().debug(`Documentation has been disabled. The controller: ${controller.constructor.name} won't be loaded.`);
      return;
    } // controller.init();


    this._controllers.push(controller);
  }

  parseRoute(route) {
    const basePath = route.basePath.filter(bp => bp.length).join("/");

    for (const endpoint of Object.values(route.endpoints)) {
      this.loadEndpoint(basePath, endpoint);
    }
  }

  loadEndpoint(basePath, endpoint) {
    const path = (0, _RouteUtils.getPath)(basePath, endpoint.path);
    (0, _Logger.getDefaultLogger)().debug(`[REGISTER] ${endpoint.verb.toUpperCase()}: ${path}`);
    this.router[endpoint.verb](path, ...endpoint.middlewares, async function (req, res, next) {
      try {
        const original = await endpoint.callback(new _ContextAPI.default(req, res, endpoint.passRequest, endpoint.verb === _HTTPVerb.default.GET), new _AuthContextAPI.default(req, req.authContext || {}));
        let status = _HTTPStatus.default.OK;

        if (typeof original === "object" && "statusCode" in original) {
          status = original?.statusCode || _HTTPStatus.default.OK;
        } else if (Number.isInteger(original) && Object.values(_HTTPStatus.default).indexOf(original) >= 0) {
          status = original;
        }

        if (status === _HTTPStatus.default.NO_CONTENT || status === _HTTPStatus.default.ACCEPTED) {
          res.sendStatus(status);
          return;
        }

        if (typeof original === "object" && "file" in original) {
          res.contentType(original?.contentType || "text/plain");
          res.sendFile(original?.body);
          return;
        }

        if (typeof original === "object" && "contentType" in original) {
          res.contentType(original?.contentType || "text/plain");
          res.send(original?.body);
          return;
        }

        res.status(status).json(original);
      } catch (e) {
        next(e);
      }
    });
  }
  /**
   * The method used to register the controllers in a path. It will make recursive calls
   * to itself if we have other folders inside the current path.
   *
   * @param basePath The base folder path from where we read.
   * @param structure The current parent structure from where we read the controller structure.
   */


  async registerControllers(basePath, structure) {
    (0, _Logger.getDefaultLogger)().info(`[REGISTER] Controllers in section: ${structure.section || "DEFAULT"}`);
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

        if (_MetadataStore.default.instance.route.isDocs(controller.constructor.name) && !_Config.default.boolean("docs.expose")) {
          (0, _Logger.getDefaultLogger)().debug(`Documentation has been disabled. The controller: ${controller.constructor.name} won't be loaded.`);
          continue;
        }

        this._controllers.push(controller);
      } catch (err) {
        /* Since we might register folders that have API class defined in them
           and since they are ES6+ Classes, we cannot call them directly. */
        (0, _Logger.getDefaultLogger)().error(`Unable to register the controller exposed by '${modulePath}'.`);
        (0, _Logger.getDefaultLogger)().debug(err.message);
        (0, _Logger.getDefaultLogger)().debug(err.stack);
      }
    }

    for (const child of structure.children) {
      await this.registerControllers(sectionPath, child);
    }
  }
  /**
   * Returns the controller structure from the current folder, together with children folders.
   *
   * @param basePath The base path from where we read the structure.
   */


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
/**
 * The global default Router that we are going to use in our application.
 */


exports.RouterBase = RouterBase;
const Router = new RouterBase();
global.router = Router;
var _default = Router;
exports.default = _default;