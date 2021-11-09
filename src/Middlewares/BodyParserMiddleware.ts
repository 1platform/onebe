import bodyParser from "body-parser";
import { Application } from "express";
import IMiddleware from "./IMiddleware";

export default class BodyParserMiddleware implements IMiddleware {
  use(app: Application): void {
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.text());
  }
}
