import { beforeAll, jest } from "@jest/globals";
import { resolve } from "node:path";

import { getEnv } from "@/System/Environment";
import { getModuleFolder } from "@/Utils/FileSystem";

beforeAll(() => {
  process.chdir(resolve(getModuleFolder(import.meta.url), "mocks"));
  getEnv().reload();
});

jest.mock("uuid", () => ({
  v1: jest.fn().mockReturnValue("e1e0c80d-70ef-48b9-b0fb-bb471246ad0a"),
  v4: jest.fn().mockReturnValue("2c77e6b4-4db5-11ee-be56-0242ac120002"),
}));
