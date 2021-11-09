import path from "path";
import app from "./App";
import initPassportStrategy, {
  IInitStrategyOptions,
} from "./Authentication/Passport";

import "./custom";
import DB from "./DB";
import HTTP from "./HTTP";
import i18n from "./i18n";
import Middlewares from "./Middlewares";
import Router from "./Router";
import Scheduler from "./Scheduler";
import Config from "./System/Config";

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

export default async function init(props: IOneBEOptions): Promise<any> {
  props = {
    ...defaultValues,
    ...props,
  };
  Config.init(path.resolve(props.currentDir, props.configDir));

  app.use(HTTP);
  app.use(Scheduler);

  await i18n(props.currentDir);
  await DB();

  return () => {
    app.HTTP.use(Middlewares);
    initPassportStrategy(props);

    return Router.register(
      path.resolve(props.currentDir, props.controllersDir)
    ).then(() => {
      app.Scheduler.run();
      app.HTTP.start();
    });
  };
}
