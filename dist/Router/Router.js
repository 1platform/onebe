"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _fs = require("fs");

var _express = require("express");

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _Logger = require("../System/Logger");

var _RouteUtils = require("./RouteUtils");

var _ContextAPI = _interopRequireDefault(require("./ContextAPI"));

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

var _AuthContextAPI = _interopRequireDefault(require("./AuthContextAPI"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class used to define the Router base of the application.
 *
 * Inside this class the magic happens:
 * - All the endpoints are registered under their specific path.
 * - All routes are loaded where and when they should.
 */
class Router {
  constructor() {
    _defineProperty(this, "_routes", []);

    _defineProperty(this, "_router", (0, _express.Router)());
  }

  /**
   * The getter for the base router we will use.
   */
  get router() {
    return this._router;
  }
  /**
   * Register the routes under the given path.
   *
   * @param routesPath The path from which we will import routes.
   */


  async register(routesPath) {
    const routesStruct = this.fetchRoutes(routesPath);
    routesStruct.section = "";
    await this.registerRoutes(routesPath, routesStruct);
  }
  /**
   * Method used to manually register a route in the application.
   *
   * @param route The route instance you want registered.
   */


  add(route) {
    if (_MetadataStore.default.instance.route.isDocs(route.constructor.name) && !_Config.default.boolean("docs.expose")) {
      (0, _Logger.getDefaultLogger)().debug(`Documentation has been disabled. The route: ${route.constructor.name} won't be loaded.`);
      return;
    }

    this._routes.push(route);
  }
  /**
   * Method used to parse the given route metadata and register all the endpoints under that
   * router.
   *
   * @param route The route metadata we want to load.
   */


  parseRoute(route) {
    const basePath = route.basePath.filter(bp => bp.length).join("/");

    for (const endpoint of Object.values(route.endpoints)) {
      this.loadEndpoint(basePath, endpoint);
    }
  }
  /**
   * Method used to register endpoints in the router under a given base path and with the
   * given endpoint metadata.
   *
   * @param basePath The base path under which the application registers the endpoint.
   * @param endpoint The endpoint metadata you need to be registered.
   */


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
   * The method used to register the routes in a path. It will make recursive calls
   * to itself if we have other folders inside the current path.
   *
   * @param basePath The base folder path from where we read.
   * @param structure The current parent structure from where we read the route structure.
   */


  async registerRoutes(basePath, structure) {
    (0, _Logger.getDefaultLogger)().info(`[REGISTER] Routes in section: ${structure.section || "DEFAULT"}`);
    const sectionPath = (0, _path.join)(basePath, structure.section);

    for (const routeFile of structure.routes) {
      const modulePath = (0, _path.resolve)(sectionPath, routeFile);

      try {
        let ClassModule = await Promise.resolve(`${modulePath}`).then(s => _interopRequireWildcard(require(s)));
        ClassModule = ClassModule.default || ClassModule;

        if (!ClassModule || typeof ClassModule === "function" && !ClassModule.prototype) {
          continue;
        }

        const route = new ClassModule();

        if (_MetadataStore.default.instance.route.isDocs(route.constructor.name) && !_Config.default.boolean("docs.expose")) {
          (0, _Logger.getDefaultLogger)().debug(`Documentation has been disabled. The route: ${route.constructor.name} won't be loaded.`);
          continue;
        }

        this._routes.push(route);
      } catch (err) {
        /* Since we might register folders that have API class defined in them
           and since they are ES6+ Classes, we cannot call them directly. */
        (0, _Logger.getDefaultLogger)().error(`Unable to register the route exposed by '${modulePath}'.`);
        (0, _Logger.getDefaultLogger)().debug(err.message);
        (0, _Logger.getDefaultLogger)().debug(err.stack);
      }
    }

    for (const child of structure.children) {
      await this.registerRoutes(sectionPath, child);
    }
  }
  /**
   * Returns the route structure from the current folder, together with children folders.
   *
   * @param basePath The base path from where we read the structure.
   */


  fetchRoutes(basePath) {
    const files = (0, _fs.readdirSync)(basePath);
    const routes = files.filter(file => [".ts", ".js", ".tsx", ".jsx"].indexOf((0, _path.extname)(file)) >= 0);
    const folders = files.filter(file => [".ts", ".js", ".tsx", ".jsx"].indexOf((0, _path.extname)(file)) < 0).map(file => (0, _path.join)(basePath, file)).filter(file => (0, _fs.statSync)(file).isDirectory());
    const children = folders.map(folder => this.fetchRoutes(folder)).filter(child => child.children.length > 0 || child.routes.length > 0);
    return {
      section: (0, _path.basename)(basePath),
      routes,
      children
    };
  }

}

exports.default = Router;