import BodyParserMiddleware from "./BodyParserMiddleware";
import CORSMiddleware from "./CORSMiddleware";
import I18nMiddleware from "./I18NMiddleware";
import LoggerMiddleware from "./LoggerMiddleware";
import PageInfoMiddleware from "./PageInfoMiddleware";
import PassportMiddleware from "./PassportMiddleware";
import SessionMiddleware from "./SessionMiddleware";
import SparkMiddleware from "./SparkMiddleware";
declare const _default: (BodyParserMiddleware | CORSMiddleware | I18nMiddleware | LoggerMiddleware | PageInfoMiddleware | PassportMiddleware | SessionMiddleware | SparkMiddleware)[];
/**
 * A list containing middlewares to be loaded in the application automatically.
 */
export default _default;
