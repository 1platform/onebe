import { describe, expect, test } from "@jest/globals";
import { JS2YAML, YAML2JS } from "./Yaml";

describe("Utils.Yaml", () => {
  const initialJSON = {
    string: "string",
    number: 123,
    boolean: true,
    null: null,
    array: ["1234", 456, null, ["abc", "def"]],
    object: {
      a: 1,
      b: "2",
      c: [
        {
          a: 1,
        },
        {
          a: 2,
        },
      ],
    },
  };

  const initialYaml = `string: string
number: 123
boolean: true
'null': null
array:
  - '1234'
  - 456
  - null
  - - abc
    - def
object:
  a: 1
  b: '2'
  c:
    - a: 1
    - a: 2
`;

  describe("JS2YAML", () => {
    test("Should convert a JS object to Yaml", () => {
      const converted = JS2YAML(initialJSON);
      expect(converted).toBe(initialYaml);
      expect(converted).not.toBe(initialJSON);
    });
    test("Should not convert an invalid JS object to Yaml", () => {
      const converted = JS2YAML(undefined);
      expect(converted).not.toBe(initialYaml);
      expect(converted).toBe("");
    });
  });
  describe("YAML2JS", () => {
    test("Should convert a Yaml string to a JS Object", () => {
      const converted = YAML2JS(initialYaml);
      expect(converted).toEqual(initialJSON);
      expect(converted).not.toBe(initialYaml);
      expect(YAML2JS("1")).toBe(1);
    });
    test("Should not convert an invalid Yaml string to JS Object", () => {
      expect(YAML2JS("undefined")).not.toBe(initialJSON);
      expect(YAML2JS("undefined")).toBe("undefined");
      expect(YAML2JS(undefined)).toBe("undefined");
      expect(YAML2JS(null)).toBe(null);
    });
  });
});
