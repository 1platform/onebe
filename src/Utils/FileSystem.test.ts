import { describe, expect, test } from "@jest/globals";
import { getFilteredFolderContents, getFolderContents, getModuleFolder, getModuleName } from "./FileSystem";
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
  describe("getFilteredFolderContents", () => {
    const basePath = process.cwd();
    const folderContents = [
      join(basePath, "contents-test", "1.txt"),
      join(basePath, "contents-test", "2.json"),
      join(basePath, "contents-test", "3"),
    ];
    const filesContents = [join(basePath, "contents-test", "1.txt"), join(basePath, "contents-test", "2.json")];
    const foldersContents = [join(basePath, "contents-test", "3")];
    test("Should return the contents of the given folder, not filtered", async () => {
      expect(await getFilteredFolderContents("./contents-test")).toEqual(folderContents);
    });
    test("Should return the contents of the given folder, with filters", async () => {
      expect(await getFilteredFolderContents("./contents-test")).toEqual(folderContents);
      expect(await getFilteredFolderContents("./contents-test", [])).toEqual(folderContents);
      expect(await getFilteredFolderContents("./contents-test", undefined)).toEqual(folderContents);
      expect(await getFilteredFolderContents("./contents-test", [{ isFolder: true }])).toEqual(foldersContents);
      expect(await getFilteredFolderContents("./contents-test", [{ isFile: true }])).toEqual(filesContents);
    });
    test("Should throw an error if the given folder is invalid", async () => {
      expect(() => getFilteredFolderContents("./contents-tests")).rejects.toThrow();
      expect(() => getFilteredFolderContents("/tmp/test")).rejects.toThrow();
      expect(() => getFilteredFolderContents("invalid-folder")).rejects.toThrow();
      expect(() => getFilteredFolderContents(undefined)).rejects.toThrow();
    });
    test("Should throw an error if invalid parameters are passed", async () => {
      expect(() => getFilteredFolderContents("./contents-test", undefined)).rejects.toThrow();
    });
  });
});
