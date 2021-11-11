import IConfig from "../System/IConfig";
import api from "./api";
import app from "./app";
import auth from "./auth";
import db from "./db";
import docs from "./docs";
import email from "./email";
import http from "./http";
import i18n from "./i18n";
import logs from "./logs";
import sms from "./sms";
import upload from "./upload";

/**
 * Exported defaults
 */
const defaultConfig: IConfig = {
  api,
  app,
  auth,
  db,
  docs,
  email,
  http,
  i18n,
  logs,
  sms,
  upload,
};
export default defaultConfig;
