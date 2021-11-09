"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

class PageInfoMiddleware {
  use(app) {
    app.use((req, res, next) => {
      req.pageURL = `${app.locals.appURL}${req.path}`.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
      req.appURL = app.locals.appURL;
      res.locals.pageURL = req.pageURL;
      next();
    });
  }

}

exports.default = PageInfoMiddleware;