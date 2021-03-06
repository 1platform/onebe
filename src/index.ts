import path from "path";
import app from "./App";
import initPassportStrategy, {
  IInitStrategyOptions,
} from "./Authentication/Passport";

import "./custom";
import DB from "./DB";
import HTTP from "./HTTP";
import i18n from "./i18n";
import Router from "./Router";
import Scheduler from "./Scheduler";
import Config from "./System/Config";
import {
  ConsoleLogger,
  FileLogger,
  NoLogger,
  setDefaultLogger,
} from "./System/Logger";
import LoggerType from "./System/LoggerType";
import LogLevel from "./System/LogLevel";

/**
 * Framework configuration options.
 */
export interface IOneBEOptions extends IInitStrategyOptions {
  /**
   * The folder in which the application runs.
   */
  currentDir?: string;
  /**
   * The configuration directory.
   */
  configDir?: string;
  /**
   * The controllers directory.
   */
  controllersDir?: string;
  /**
   * Should the Database connection be made.
   */
  noDBConnection?: boolean;
}

const defaultValues: IOneBEOptions = {
  currentDir: process.cwd(),
  configDir: "./config",
  controllersDir: "./controllers",
  noDBConnection: false,
};

/**
 * Framework init function. It initializes some elements of the framework
 * to be later used when starting the application up.
 *
 * @param props The various properties you can pass to the init function.
 */
export default async function init(
  props: IOneBEOptions
): Promise<(strategyProps?: IInitStrategyOptions) => Promise<void>> {
  props = {
    ...defaultValues,
    ...props,
  };
  Config.init(path.resolve(props.currentDir, props.configDir));

  if (!Config.boolean("logs.enabled")) {
    setDefaultLogger(new NoLogger());
  } else {
    switch (Config.string("logs.type")) {
      case LoggerType.CONSOLE:
        setDefaultLogger(
          new ConsoleLogger(
            LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]
          )
        );
        break;
      case LoggerType.FILE:
        setDefaultLogger(
          new FileLogger(
            LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]
          )
        );
        break;
    }
  }

  app.use(HTTP);
  app.use(Scheduler);

  await i18n(props.currentDir);

  if (!props.noDBConnection) {
    await DB();
  }

  return (strategyProps?: IInitStrategyOptions) => {
    initPassportStrategy({
      ...props,
      ...(strategyProps || {}),
    });

    return Router.register(
      path.resolve(props.currentDir, props.controllersDir)
    ).then(() => {
      app.Scheduler.run();
      app.HTTP.start();
    });
  };
}
