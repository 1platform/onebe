import { describe, expect, test } from "@jest/globals";
import { randomString } from "@/Utils/StringUtils";

describe("StringUtils", () => {
  test("Generate a string with length of 10", () => {
    const randomStringGenerated = randomString(10);
    expect(randomStringGenerated).not.toBeUndefined();
    expect(randomStringGenerated).toHaveLength(10);
  });
  test("Generate a string with length of 64", () => {
    const randomStringGenerated = randomString(64);
    expect(randomStringGenerated).not.toBeUndefined();
    expect(randomStringGenerated).toHaveLength(64);
  });
});
