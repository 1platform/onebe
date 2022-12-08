import type IConfig from "@/System/IConfig";
import api from "@/defaults/api";
import app from "@/defaults/app";
import auth from "@/defaults/auth";
import db from "@/defaults/db";
import docs from "@/defaults/docs";
import email from "@/defaults/email";
import http from "@/defaults/http";
import i18n from "@/defaults/i18n";
import logs from "@/defaults/logs";
import sms from "@/defaults/sms";
import upload from "@/defaults/upload";

/**
 * The configuration object, with some default values, that can be used
 * in the application for configuring the behaviour of the application.
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
