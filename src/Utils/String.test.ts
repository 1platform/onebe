import { describe, expect, test } from "@jest/globals";
import {
  abbreviate,
  camelCase,
  comparePassword,
  encryptPassword,
  randomString,
  shortid,
  slugify,
  snakeCase,
  stripHTML,
  titleCase,
  uuidV1,
  uuidV4,
} from "@/Utils/String";
import InvalidParameterException from "../Exceptions/Utils/InvalidParameterException";

describe("Utils.String", () => {
  describe("randomString", () => {
    const randomStringAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_-";

    test("Generate a string with the default length", () => {
      const randomStringGenerated = randomString();
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(10);
      expect(randomStringGenerated.split("").every((char) => randomStringAlphabet.includes(char))).toBeTruthy();
    });
    test("Invalid length should thrown an error", () => {
      expect(() => randomString(-10)).toThrowError(InvalidParameterException);
      expect(() => randomString(0)).toThrowError(InvalidParameterException);
    });
    test("Generate a string with length of 10", () => {
      const randomStringGenerated = randomString(10);
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(10);
      expect(randomStringGenerated.split("").every((char) => randomStringAlphabet.includes(char))).toBeTruthy();
    });
    test("Generate a string with length of 64", () => {
      const randomStringGenerated = randomString(64);
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(64);
      expect(randomStringGenerated.split("").every((char) => randomStringAlphabet.includes(char))).toBeTruthy();
    });
  });

  describe("shortid", () => {
    test("Generate a string with the default length", () => {
      const randomStringGenerated = shortid();
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(10);
    });
    test("Invalid length should return nothing", () => {
      expect(shortid(-10)).toBe("");
      expect(shortid(0)).toBe("");
    });
    test("Generate a string with length of 10", () => {
      const randomStringGenerated = shortid(10);
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(10);
    });
    test("Generate a string with length of 64", () => {
      const randomStringGenerated = shortid(64);
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(64);
    });
  });

  describe("uuidV1", () => {
    test("Generate a valid UUID V1", () => {
      const randomStringGenerated = uuidV1();
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(36);
      expect(randomStringGenerated.split("-")).toHaveLength(5);
      expect(randomStringGenerated).toBe("e1e0c80d-70ef-48b9-b0fb-bb471246ad0a");
    });
  });

  describe("uuidV4", () => {
    test("Generate a valid UUID V4", () => {
      const randomStringGenerated = uuidV4();
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(36);
      expect(randomStringGenerated.split("-")).toHaveLength(5);
      expect(randomStringGenerated).toBe("2c77e6b4-4db5-11ee-be56-0242ac120002");
    });
  });

  describe("encryptPassword", () => {
    const password = "123456";
    test("Encrypt a valid password", () => {
      const randomStringGenerated = encryptPassword(password);
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(60);
      expect(randomStringGenerated).not.toBe(password);
      expect(randomStringGenerated.split("$")).toHaveLength(4);
      expect(randomStringGenerated.substring(0, 6)).toBe("$2b$10");
    });
    test("Encrypt a valid password with an invalid salt size", () => {
      const randomStringGenerated = encryptPassword(password, 0);
      expect(randomStringGenerated).not.toBeUndefined();
      expect(randomStringGenerated).toHaveLength(60);
      expect(randomStringGenerated).not.toBe(password);
      expect(randomStringGenerated.split("$")).toHaveLength(4);
      expect(randomStringGenerated.substring(0, 6)).toBe("$2b$10");
      expect(encryptPassword(password, 1).substring(0, 6)).toBe("$2b$04");
      expect(encryptPassword(password, 2).substring(0, 6)).toBe("$2b$04");
      expect(encryptPassword(password, 3).substring(0, 6)).toBe("$2b$04");
      expect(encryptPassword(password, 4).substring(0, 6)).toBe("$2b$04");
      expect(encryptPassword(password, 5).substring(0, 6)).toBe("$2b$05");
    });
  });

  describe("comparePassword", () => {
    const password = "123456";
    const encryptedPassword = "$2a$10$k3pnKfkjtWcW3VPFt2deW.h.6qTSaexgaGQfpfHlsrVwC1Hlhkvbu";
    test("Check a valid password", () => {
      expect(comparePassword(password, encryptedPassword)).toBeTruthy();
    });
  });

  describe("stripHTML", () => {
    test("Passing a HTML string, it returns the stripped version", () => {
      expect(stripHTML("<h1>This is a string</h1>")).toBe("This is a string");
      expect(stripHTML("This is a string")).toBe("This is a string");
      expect(
        stripHTML(`<html lang="en">
<head>
<title>Test</title>
</head>
<body>
<h1>This is a string</h1>
</body>
</html>`),
      ).toBe(`Test

This is a string`);
      expect(stripHTML("")).toBe("");
      expect(stripHTML("<p>!3#%&^</p>")).toBe("!3#%&^");
      expect(stripHTML("<p>&gt;&lt;</p>")).toBe("");
      expect(stripHTML("!3#%&^")).toBe("!3#%&^");
    });
  });

  describe("camelCase", () => {
    test("Passing a string, it returns the camel cased version", () => {
      expect(camelCase("This is a string")).toBe("thisIsAString");
      expect(camelCase("this is a string")).toBe("thisIsAString");
      expect(camelCase("Thisisastring")).toBe("thisisastring");
      expect(camelCase("thisisastring")).toBe("thisisastring");
      expect(camelCase("")).toBe("");
      expect(camelCase("!3#%&^")).toBe("3");
      expect(camelCase("!#%&^")).toBe("");
    });
    test("Passing a string, it returns the camel cased version, with the first letter also a capital", () => {
      expect(camelCase("This is a string", true)).toBe("ThisIsAString");
      expect(camelCase("this is a string", true)).toBe("ThisIsAString");
      expect(camelCase("Thisisastring", true)).toBe("Thisisastring");
      expect(camelCase("thisisastring", true)).toBe("Thisisastring");
      expect(camelCase("", true)).toBe("");
      expect(camelCase("!3#%&^", true)).toBe("3");
      expect(camelCase("!#%&^", true)).toBe("");
    });
  });

  describe("snakeCase", () => {
    test("Passing a string, it returns the snake cased version", () => {
      expect(snakeCase("This is a string")).toBe("this_is_a_string");
      expect(snakeCase("this is a string")).toBe("this_is_a_string");
      expect(snakeCase("Thisisastring")).toBe("thisisastring");
      expect(snakeCase("thisIsAString")).toBe("this_is_a_string");
      expect(snakeCase("")).toBe("");
      expect(snakeCase("!3#%&^")).toBe("!3#%&^");
    });
    test("Passing a string, it returns the snake cased version, with a custom separator", () => {
      expect(snakeCase("This is a string", ".")).toBe("this.is.a.string");
      expect(snakeCase("this is a string", "|")).toBe("this|is|a|string");
      expect(snakeCase("thisIsAString", "1")).toBe("this1is1a1string");
      expect(snakeCase("", "#")).toBe("");
      expect(snakeCase("!3#%&^", "$")).toBe("!3#%&^");
    });
  });

  describe("titleCase", () => {
    test("Passing a string, it returns the title cased version", () => {
      expect(titleCase("This is a string")).toBe("This Is A String");
      expect(titleCase("this is a string")).toBe("This Is A String");
      expect(titleCase("Thisisastring")).toBe("Thisisastring");
      expect(titleCase("thisisastring")).toBe("Thisisastring");
      expect(titleCase("")).toBe("");
      expect(titleCase("!3#%&^")).toBe("!3#%&^");
    });
  });

  describe("abbreviate", () => {
    test("Passing a string, it returns the abbreviation", () => {
      expect(abbreviate("This is a string")).toBe("Tias");
      expect(abbreviate("Thisisastring")).toBe("T");
      expect(abbreviate("")).toBe("");
      expect(abbreviate("!3#%&^")).toBe("!");
    });

    test("Passing a string, it returns the abbreviation, based on the passed length", () => {
      expect(abbreviate("This is a string", 2)).toBe("Thisast");
      expect(abbreviate("Thisisastring", 4)).toBe("This");
      expect(abbreviate("", 3)).toBe("");
      expect(abbreviate("!3#%&^", 3)).toBe("!3#");
    });
  });

  describe("slugify", () => {
    test("Passing a predefined string, generates a valid slug", () => {
      const originalString = "This is a text";
      const slugifiedText = slugify(originalString);
      expect(slugifiedText).not.toBeUndefined();
      expect(slugifiedText).toBe("this-is-a-text");
      expect(slugifiedText).not.toBe(originalString);
      expect(slugifiedText.length).toBe(originalString.length);
    });
    test("Passing a predefined string with various symbols, generates a valid slug", () => {
      const originalString = "This. is-a text!";
      const slugifiedText = slugify(originalString);
      expect(slugifiedText).not.toBeUndefined();
      expect(slugifiedText).toBe("this-is-a-text");
      expect(slugifiedText).not.toBe("This is a text");
      expect(slugifiedText).not.toBe(originalString);
      expect(slugifiedText.length).not.toBe(originalString.length);
      expect(slugifiedText.length).toBe("This is a text".length);
    });
    test("Passing an invalid string, generates an empty string", () => {
      const originalString = "#$().!";
      const slugifiedText = slugify(originalString);
      expect(slugifiedText).not.toBeUndefined();
      expect(slugifiedText).toBe("");
      expect(slugifiedText).not.toBe(originalString);
      expect(slugifiedText.length).not.toBe(originalString.length);
      expect(slugifiedText.length).toBe(0);
    });
  });
});
