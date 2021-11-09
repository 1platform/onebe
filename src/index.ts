import path from "path";
import app from "./App";
import initPassportStrategy, {
  IInitStrategyOptions,
} from "./Authentication/Passport";
import HTTP from "./HTTP";
import i18n from "./i18n";
import Middlewares from "./Middlewares";
import Router from "./Router";
import Config from "./System/Config";

import "./custom";

interface IOneBEOptions extends IInitStrategyOptions {
  currentDir?: string;
  configDir?: string;
  controllersDir?: string;
}

const defaultValues: IOneBEOptions = {
  currentDir: process.cwd(),
  configDir: "./config",
  controllersDir: "./controllers",
};

export default function OneBE(props: IOneBEOptions): Promise<any> {
  props = {
    ...defaultValues,
    ...props,
  };
  Config.init(path.resolve(props.currentDir, props.configDir));

  app.use(HTTP);

  return i18n(props.currentDir)
    .then(() => {
      app.HTTP.use(Middlewares);
      return Router.register(
        path.resolve(props.currentDir, props.controllersDir)
      );
    })
    .then(() => {
      initPassportStrategy(props);
      return app;
    });
}
