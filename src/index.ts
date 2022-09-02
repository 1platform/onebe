import path from "path";
import app from "./App";
import initPassportStrategy, { IInitStrategyOptions } from "./Authentication/Passport";

import { IInitOptions } from "./custom";
import DB from "./DB";
import { HTTP } from "./HTTP";
import i18n from "./i18n";
import Router from "./Router";
import Scheduler from "./Scheduler";
import { Config, ConsoleLogger, FileLogger, JSONLogger, LoggerType, LogLevel, NoLogger, setDefaultLogger } from "./System";
import MetadataStore from "./Documentation/MetadataStore";
import DocsController from "./Documentation/DocsController";

/**
 * Default values to be used for the framework configuration.
 */
const defaultValues: IInitOptions = {
  currentFolder: process.cwd(),
  configFolder: "./config",
  routesFolder: "./routes",
  noDBConnection: false,
};

/**
 * Framework initialisation function. It initializes some elements of the framework
 * to be later used when starting the application up.
 *
 * @param props The various properties you can pass to the init function.
 */
export default async function init(props: IInitOptions): Promise<(strategyProps?: IInitStrategyOptions) => Promise<void>> {
  props = {
    ...defaultValues,
    ...props,
  };
  Config.init(path.resolve(props.currentFolder, props.configFolder));

  if (!Config.boolean("logs.enabled")) {
    setDefaultLogger(new NoLogger());
  } else {
    switch (Config.string("logs.type", LoggerType.CONSOLE)) {
      case LoggerType.CONSOLE:
        setDefaultLogger(new ConsoleLogger(LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]));
        break;
      case LoggerType.FILE:
        setDefaultLogger(new FileLogger(LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]));
        break;
      case LoggerType.JSON:
        setDefaultLogger(new JSONLogger(LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]));
        break;
      case LoggerType.JSON_FILE:
        setDefaultLogger(new JSONLogger(LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()], true));
        break;
      case LoggerType.NO_LOGGER:
      default:
        setDefaultLogger(new NoLogger());
        break;
    }
  }

  app.use(HTTP);
  app.use(Scheduler);

  await i18n(props.currentFolder);

  if (!props.noDBConnection) {
    await DB().then(() => MetadataStore.instance.entity.registerRelations());
  }

  return (strategyProps?: IInitStrategyOptions) => {
    initPassportStrategy({
      ...props,
      ...(strategyProps || {}),
    });

    return Router.register(path.resolve(props.currentFolder, props.routesFolder)).then(() => {
      Router.add(new DocsController());
      app.Scheduler.run();
      app.HTTP.start();
    });
  };
}
