"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE = DELETE;
exports.GET = GET;
exports.PATCH = PATCH;
exports.POST = POST;
exports.PUT = PUT;
exports.del = del;
exports.get = get;
exports.patch = patch;
exports.post = post;
exports.put = put;

var _DocsDecorators = require("../Docs/DocsDecorators");

var _DocsStore = _interopRequireDefault(require("../Docs/DocsStore"));

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _HTTPVerb = _interopRequireDefault(require("../HTTP/HTTPVerb"));

var _Logger = _interopRequireDefault(require("../System/Logger"));

var _index = _interopRequireDefault(require("./index"));

var _RouteUtils = require("./RouteUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callbackExtractor(fn) {
  let callback;
  let middlewares = [];

  if (Array.isArray(fn)) {
    middlewares = [...fn.slice(0, fn.length - 1)];
    callback = fn.pop();
  } else {
    callback = fn;
  }

  return {
    callback,
    middlewares
  };
}

function verbAction(props) {
  const {
    callback,
    middlewares
  } = callbackExtractor(props.actionCallback);
  let path = `/${props.basePath}/${props.path}`.replace(/(https?:\/\/)|(\/)+/g, "$1$2");

  if (path.lastIndexOf("/") === path.length - 1 && path !== "/") {
    path = path.substring(0, path.length - 1);
  }

  _DocsStore.default.instance.addRoute(props.groupName, {
    path,
    verb: props.method,
    methodName: callback.name,
    controllerName: props.target.constructor.name,
    isAuthenticated: Reflect.getMetadata("route:auth", props.target, props.propertyKey) || false,
    appSpecific: Reflect.getMetadata("route:auth:app", props.target, props.propertyKey) || false,
    userSpecific: Reflect.getMetadata("route:auth:user", props.target, props.propertyKey) || false
  }, (0, _DocsDecorators.getElementDocs)(props.target, props.propertyKey) || {});

  _Logger.default.debug(`[REGISTER] ${props.method.toUpperCase()}: ${path}`);

  _index.default.router[props.method](path, ...middlewares, async function (req, res, next) {
    try {
      const original = await callback({
        params: req.params,
        query: req.query,
        body: props.method !== _HTTPVerb.default.GET ? req.body : undefined,
        header: req.header,
        req: props.passRequest ? req : undefined,
        res: props.passRequest ? res : undefined,
        file: req.file || undefined,
        files: req.files || undefined
      }, {
        user: req.user,
        isAuthenticated: req.isAuthenticated.bind(req)
      });
      let status = _HTTPStatus.default.OK;

      if (typeof original === "object" && "statusCode" in original) {
        status = (original === null || original === void 0 ? void 0 : original.statusCode) || _HTTPStatus.default.OK;
      } else if (Number.isInteger(original) && Object.values(_HTTPStatus.default).indexOf(original) >= 0) {
        status = original;
      }

      if (status === _HTTPStatus.default.NO_CONTENT || status === _HTTPStatus.default.ACCEPTED) {
        res.sendStatus(status);
        return;
      }

      if (typeof original === "object" && "file" in original) {
        res.contentType((original === null || original === void 0 ? void 0 : original.contentType) || "text/plain");
        res.sendFile(original === null || original === void 0 ? void 0 : original.body);
        return;
      }

      if (typeof original === "object" && "contentType" in original) {
        res.contentType((original === null || original === void 0 ? void 0 : original.contentType) || "text/plain");
        res.send(original === null || original === void 0 ? void 0 : original.body);
        return;
      }

      res.status(status).json(original);
    } catch (e) {
      next(e);
    }
  });
}

function verbDecorator(props) {
  const {
    method,
    path,
    target,
    descriptor,
    passRequest,
    propertyKey
  } = props;
  const routeCallbacks = (0, _RouteUtils.getRouteCallbacks)(target);
  const beforeHooksCallbacks = (0, _RouteUtils.getBeforeHooksCallbacks)(target, propertyKey);
  const afterHooksCallbacks = (0, _RouteUtils.getAfterHooksCallbacks)(target, propertyKey);
  routeCallbacks.push((basePath, groupName) => {
    beforeHooksCallbacks.forEach(hook => hook({
      method,
      basePath,
      path,
      groupName
    }));
    verbAction({
      method,
      basePath,
      path,
      actionCallback: descriptor.value,
      passRequest,
      target,
      propertyKey,
      groupName
    });
    afterHooksCallbacks.forEach(hook => hook({
      method,
      basePath,
      path,
      groupName
    }));
  });
}

function get(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.GET,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}

function post(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.POST,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}

function put(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.PUT,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}

function patch(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.PATCH,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}

function del(path, passRequest = false) {
  return function (target, propertyKey, descriptor) {
    verbDecorator({
      method: _HTTPVerb.default.DELETE,
      path,
      target,
      descriptor,
      passRequest,
      propertyKey
    });
  };
}

function GET(path, passRequest = false) {
  return get(path, passRequest);
}

function POST(path, passRequest = false) {
  return post(path, passRequest);
}

function PUT(path, passRequest = false) {
  return put(path, passRequest);
}

function PATCH(path, passRequest = false) {
  return patch(path, passRequest);
}

function DELETE(path, passRequest = false) {
  return del(path, passRequest);
}