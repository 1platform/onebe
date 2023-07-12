import { beforeAll } from "@jest/globals";
import { resolve } from "node:path";

beforeAll(() => {
  process.chdir(resolve(__dirname));
});
