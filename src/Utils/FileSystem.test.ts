import { describe, expect, test } from "@jest/globals";
import { getFolderContents, getModuleFolder, getModuleName } from "./FileSystem";
import { join } from "node:path";

describe("Utils.FileSystem", () => {
  describe("getModuleFolder", () => {
    test("Should return a valid folder based on valid folder path", () => {
      expect(getModuleFolder("file:///tmp/test.txt")).toBe("/tmp");
      expect(getModuleFolder("file:///C:\\Users\\module.js")).not.toBe("/tmp");
      expect(() => getModuleFolder("file:///tmp/test.txt")).not.toThrow();
    });
    test("Should throw an error if the path isn't valid", () => {
      expect(() => getModuleFolder("1")).toThrow();
      expect(() => getModuleFolder("ios://test")).toThrow();
    });
  });
  describe("getModuleName", () => {
    test("Should return a valid file based on valid file path", () => {
      expect(getModuleName("file:///tmp/test.txt")).toBe("test.txt");
      expect(getModuleName("file:///C:\\Users\\module.js")).toBe("module.js");
      expect(() => getModuleName("file:///tmp/test.txt")).not.toThrow();
    });
    test("Should throw an error if the path isn't valid", () => {
      expect(() => getModuleName("1")).toThrow();
      expect(() => getModuleName("ios://test")).toThrow();
    });
  });
  describe("getFolderContents", () => {
    const basePath = process.cwd();
    const folderContents = [
      join(basePath, "contents-test", "1.txt"),
      join(basePath, "contents-test", "2.json"),
      join(basePath, "contents-test", "3"),
    ];
    test("Should return the contents of the given folder", async () => {
      expect(await getFolderContents("./contents-test")).toEqual(folderContents);
    });
    test("Should throw an error if the given folder is invalid", () => {
      expect(() => getFolderContents("./contents-tests")).rejects.toThrow();
      expect(() => getFolderContents("/tmp/test")).rejects.toThrow();
      expect(() => getFolderContents("invalid-folder")).rejects.toThrow();
      expect(() => getFolderContents(undefined)).rejects.toThrow();
    });
  });
  // describe("getFilteredFolderContents", () => {
  //   test("", () => {
  //     expect(getFilteredFolderContents).toBe();
  //   });
  // });
});
