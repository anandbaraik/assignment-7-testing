import { findLongestWord, findLastNegativeNumber } from "./utils";

describe("tesing find", () => {
  describe("test to findLongestWord", () => {
    it("Find longest word in a sentence", () =>
      expect(
        findLongestWord("The quick brown fox jumps over the lazy dog.")
      ).toBe("quick"));

    it("Find longest word in a sentence with a single word", () =>
      expect(findLongestWord("Hello")).toBe("Hello"));

    it("Find longest word in an empty string", () =>
      expect(findLongestWord("")).toBe(undefined));

    it("Check if the output is a string", () =>
      expect(
        findLongestWord("The quick brown fox jumps over the lazy dog.")
      ).toBe("quick"));
  });

  describe("test to findLastNegativeNumber", () => {
    it("Find last negative number", () =>
      expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toBe(-5));
    it("Find last negative number in an array with no negative numbers", () =>
      expect(findLastNegativeNumber([3, 7, 2, 9, 5])).toBe(undefined));
    it("Find last negative number in an array with decimal numbers", () =>
      expect(findLastNegativeNumber([3.5, -7.2, -2.1, 9.7, 5.3])).toBe(-2.1));
    it("Check if the output is a number", () =>
      expect(findLastNegativeNumber([3, -7, -2, 9, -5])).toBe(-5));
    it("Check if the function throws an error with invalid input", () =>
      expect(() => findLastNegativeNumber("invalid")).toThrow());
  });
});
