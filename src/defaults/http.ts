import Env from "../System/Env";
import IConfig from "../System/IConfig";

const defaultHTTPConfig: IConfig = {
  listen: Env.string("HTTP_LISTEN", "127.0.0.1"),
  port: Env.int("HTTP_PORT", 7200),
  url: Env.string("HTTP_URL", "http://localhost:7200").replace(
    /(https?:\/\/)|(\/)+/g,
    "$1$2"
  ),
  cookie: {
    domain: Env.string("COOKIE_DOMAIN", "localhost"),
    secure: Env.flag("COOKIE_SECURE"),
  },
};

export default defaultHTTPConfig;
