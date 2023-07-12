import { describe, expect, test } from "@jest/globals";
import BUILD from "./build";

describe("Check Build Information", () => {
  test("Build const is always DEV", () => {
    expect(BUILD).toBe("DEV");
  });
});
