import IConfig from "../System/IConfig";
import api from "./api";
import auth from "./auth";
import docs from "./docs";
import http from "./http";
import logs from "./logs";

const defaultConfig: IConfig = {
  api,
  auth,
  docs,
  logs,
  http,
};
export default defaultConfig;
