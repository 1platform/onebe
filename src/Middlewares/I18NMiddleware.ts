import { Application } from "express";
import i18next from "i18next";
import { handle } from "i18next-http-middleware";
import IMiddleware from "./IMiddleware";

export default class I18nMiddleware implements IMiddleware {
  use(app: Application): void {
    app.use(handle(i18next));
  }
}
