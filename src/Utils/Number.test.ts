import { afterEach, beforeEach, describe, expect, jest, test } from "@jest/globals";
import { fixedSizeRandom, random } from "./Number";

describe("Utils.Number", () => {
  describe("random", () => {
    beforeEach(() => {
      jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
    });

    afterEach(() => {
      jest.spyOn(global.Math, "random").mockRestore();
    });
    test("Should generate between given constraints", () => {
      expect(random()).toBe(12346);
      expect(random(0, 100)).toBe(12);
      expect(random(50, 100)).toBe(50);
      expect(random(50, 1000)).toBe(123);
      expect(random(50)).toBe(12346);
      expect(random(null)).toBe(12346);
      expect(random(null, null)).toBe(12346);
      expect(random(null, 100)).toBe(12);
      expect(random(-100, 0)).toBe(12);
      expect(random(-90, -10)).toBe(12);
    });
  });
  describe("fixedSizeRandom", () => {
    beforeEach(() => {
      jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);
    });

    afterEach(() => {
      jest.spyOn(global.Math, "random").mockRestore();
    });
    test("Should return a fixed length random number", () => {
      expect(fixedSizeRandom(1)).toBe("1");
      expect(fixedSizeRandom(2)).toBe("12");
      expect(fixedSizeRandom(0)).toBe("");
      expect(fixedSizeRandom(-100)).toBe("");
      expect(fixedSizeRandom(null)).toBe("");
      expect(fixedSizeRandom(undefined)).toBe("");
      expect(fixedSizeRandom(1.2)).toBe("1");
      expect(fixedSizeRandom(10)).toBe("1234567890");
    });
  });
});
