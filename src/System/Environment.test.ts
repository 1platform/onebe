import { describe, expect, test, beforeEach } from "@jest/globals";
import { getEnv } from "@/System";

describe("Environment", () => {
  beforeEach(() => {
    getEnv().reload();
  });
  test("Check that environment variables are set correctly", () => {
    expect(getEnv().get("TEST_ENV_INT")).toBe("1");
    expect(getEnv().get("TEST_ENV_STRING")).toBe("This is a test");
    expect(getEnv().int("TEST_ENV_INT")).toBe(1);
    expect(getEnv().number("TEST_ENV_NUMBER")).toBe(1.24);
    expect(getEnv().string("TEST_ENV_STRING")).toBe("This is a test");
    expect(getEnv().boolean("TEST_ENV_BOOLEAN_TRUE")).toBeTruthy();
    expect(getEnv().boolean("TEST_ENV_BOOLEAN_FALSE")).toBeFalsy();
    expect(getEnv().array("TEST_ENV_ARRAY")).toStrictEqual(["some", "test", "array"]);
    expect(getEnv().flag("TEST_ENV_BOOLEAN_TRUE")).toBe(true);
    expect(getEnv().url("TEST_ENV_URL")).toBe("https://google.com/");
    expect(getEnv().url("TEST_ENV_URL_BAD")).toBe("https://google.com/search/test");
    expect(getEnv().keys).toEqual(
      expect.arrayContaining([
        "TEST_ENV_INT",
        "TEST_ENV_NUMBER",
        "TEST_ENV_STRING",
        "TEST_ENV_BOOLEAN_TRUE",
        "TEST_ENV_BOOLEAN_FALSE",
        "TEST_ENV_ARRAY",
        "TEST_ENV_URL",
        "TEST_ENV_URL_BAD",
      ]),
    );
  });
  test("Check that invalid environment variables are set correctly", () => {
    expect(getEnv().int("TEST_ENV_INT", 2)).toBe(1);
    expect(getEnv().int("TEST_ENV_NUMBER", 2)).toBe(1);
    expect(getEnv().int("TEST_ENV_INT_2")).toBe(0);
    expect(getEnv().int("TEST_ENV_INT_3", 3)).toBe(3);
    expect(getEnv().int("TEST_ENV_STRING", 3)).toBe(3);

    expect(getEnv().number("TEST_ENV_INT", 2)).toBe(1);
    expect(getEnv().number("TEST_ENV_NUMBER", 2)).toBe(1.24);
    expect(getEnv().number("TEST_ENV_INT_2")).toBe(0);
    expect(getEnv().number("TEST_ENV_INT_3", 3.03)).toBe(3.03);

    expect(getEnv().string("TEST_ENV_STRING", "NAN")).toBe("This is a test");
    expect(getEnv().string("TEST_ENV_STRING_2", "NAN")).toBe("NAN");

    expect(getEnv().boolean("TEST_ENV_STRING_2")).toBe(false);

    expect(getEnv().url("TEST_ENV_URL", "https://sprk.dev/")).toBe("https://google.com/");
    expect(getEnv().url("TEST_ENV_URL_2", "https://sprk.dev/")).toBe("https://sprk.dev/");

    expect(getEnv().array("TEST_ENV_ARRAY", ",", "1, 2 ,3")).toStrictEqual(["some", "test", "array"]);
    expect(getEnv().array("TEST_ENV_ARRAY_2", ",", "1, 2 ,3")).toStrictEqual(["1", "2", "3"]);
    expect(getEnv().array("TEST_ENV_ARRAY_3", " ", "1 2 3")).toStrictEqual(["1", "2", "3"]);
  });
  test("Check that environment variables are set correctly after reload", () => {
    expect(getEnv().get("TEST_ENV_INT")).toBe("1");
    expect(getEnv().get("TEST_ENV_STRING")).toBe("This is a test");
    expect(getEnv().int("TEST_ENV_INT")).toBe(1);
    expect(getEnv().number("TEST_ENV_NUMBER")).toBe(1.24);
    expect(getEnv().string("TEST_ENV_STRING")).toBe("This is a test");
    expect(getEnv().boolean("TEST_ENV_BOOLEAN_TRUE")).toBeTruthy();
    expect(getEnv().boolean("TEST_ENV_BOOLEAN_FALSE")).toBeFalsy();
    expect(getEnv().array("TEST_ENV_ARRAY")).toStrictEqual(["some", "test", "array"]);
    expect(getEnv().flag("TEST_ENV_BOOLEAN_TRUE")).toBe(true);
    expect(getEnv().url("TEST_ENV_URL")).toBe("https://google.com/");
    expect(getEnv().url("TEST_ENV_URL_BAD")).toBe("https://google.com/search/test");
    expect(getEnv().keys).toEqual(
      expect.arrayContaining([
        "TEST_ENV_INT",
        "TEST_ENV_NUMBER",
        "TEST_ENV_STRING",
        "TEST_ENV_BOOLEAN_TRUE",
        "TEST_ENV_BOOLEAN_FALSE",
        "TEST_ENV_ARRAY",
        "TEST_ENV_URL",
        "TEST_ENV_URL_BAD",
      ]),
    );

    getEnv().reload("reload.env");
    expect(getEnv().get("TEST_ENV_INT")).toBe("2");
    expect(getEnv().get("TEST_ENV_STRING")).toBe("This is a test reloaded");
    expect(getEnv().int("TEST_ENV_INT")).toBe(2);
    expect(getEnv().number("TEST_ENV_NUMBER")).toBe(2.24);
    expect(getEnv().string("TEST_ENV_STRING")).toBe("This is a test reloaded");
    expect(getEnv().boolean("TEST_ENV_BOOLEAN_TRUE")).toBeFalsy();
    expect(getEnv().boolean("TEST_ENV_BOOLEAN_FALSE")).toBeTruthy();
    expect(getEnv().array("TEST_ENV_ARRAY")).toStrictEqual(["some 2", "test 2", "array 2"]);
    expect(getEnv().flag("TEST_ENV_BOOLEAN_TRUE")).toBe(false);
    expect(getEnv().url("TEST_ENV_URL")).toBe("https://bing.com/");
    expect(getEnv().url("TEST_ENV_URL_BAD")).toBe("https://bing.com/search/test");
    expect(getEnv().keys).toEqual(
      expect.arrayContaining([
        "TEST_ENV_INT",
        "TEST_ENV_NUMBER",
        "TEST_ENV_STRING",
        "TEST_ENV_BOOLEAN_TRUE",
        "TEST_ENV_BOOLEAN_FALSE",
        "TEST_ENV_ARRAY",
        "TEST_ENV_URL",
        "TEST_ENV_URL_BAD",
      ]),
    );
  });
});
