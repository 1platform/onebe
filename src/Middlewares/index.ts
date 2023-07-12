import BodyParserMiddleware from "@/Middlewares/BodyParserMiddleware";
import CORSMiddleware from "@/Middlewares/CORSMiddleware";
import I18nMiddleware from "@/Middlewares/I18NMiddleware";
import LoggerMiddleware from "@/Middlewares/LoggerMiddleware";
import OneBEMiddleware from "@/Middlewares/OneBEMiddleware";
import PageInfoMiddleware from "@/Middlewares/PageInfoMiddleware";
import PassportMiddleware from "@/Middlewares/PassportMiddleware";
import SessionMiddleware from "@/Middlewares/SessionMiddleware";

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
