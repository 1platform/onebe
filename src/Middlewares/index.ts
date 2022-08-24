import BodyParserMiddleware from "./BodyParserMiddleware";
import CORSMiddleware from "./CORSMiddleware";
import I18nMiddleware from "./I18NMiddleware";
import LoggerMiddleware from "./LoggerMiddleware";
import PageInfoMiddleware from "./PageInfoMiddleware";
import PassportMiddleware from "./PassportMiddleware";
import SessionMiddleware from "./SessionMiddleware";
import OneBEMiddleware from "./OneBEMiddleware";

/**
 * A list containing middlewares to be loaded in the application automatically.
 */
export default [
  new LoggerMiddleware(),
  new BodyParserMiddleware(),
  new CORSMiddleware(),
  new SessionMiddleware(),
  new I18nMiddleware(),
  new PageInfoMiddleware(),
  new PassportMiddleware(),
  new OneBEMiddleware(),
];
