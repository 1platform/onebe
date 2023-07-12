import { describe, expect, test } from "@jest/globals";
import { codename, getCodename, getVersion, getVersionCodename, version } from "@/version";
import BUILD from "@/build";

describe("Check Version Information", () => {
  test("Application version should match what is defined in version", () => {
    expect(getVersion()).toBe("2.7.5-DEV");
    expect(getVersion()).toBe(`${version}-${BUILD}`);
  });
  test("Application codename should match what is defined in version", () => {
    expect(getCodename()).toBe("Rebuild");
    expect(getCodename()).toBe(codename);
  });
  test("Application codename should match what is defined in version", () => {
    expect(getVersionCodename()).toBe("2.7.5-DEV (Rebuild)");
    expect(getVersionCodename()).toBe(`${version}-${BUILD} (${codename})`);
  });
});
