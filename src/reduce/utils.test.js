import { sumNestedArrays, calculateFactorial } from "./utils";

describe("testing reducer", () => {
  describe("test to sumNestedArrays", () => {
    it("test to Sum numbers in a nested array", () =>
      expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toBe(21));
    it("test to Sum numbers in an empty nested array", () =>
      expect(sumNestedArrays([])).toBe(0));
    it("test to Check if the output is a number", () =>
      expect(sumNestedArrays([[1, 2], [3, 4, 5], [6]])).toBe(21));
    it("test to Ensure original array remains unchanged", () => {
      const arr = [[1, 2], [3, 4, 5], [6]];
      const dupArr = [...arr];
      const resultedArr = sumNestedArrays(dupArr);
      expect(resultedArr).not.toBe(arr);
      expect(arr).toEqual(dupArr);
      expect(resultedArr).toBe(21);
    });
  });

  describe("Test to calculateFactorial", () => {
    it("Calculate factorial of 0", () => expect(calculateFactorial(0)).toBe(1));
    it("Calculate factorial of 1", () => expect(calculateFactorial(1)).toBe(1));
    it("Calculate factorial of 5", () =>
      expect(calculateFactorial(5)).toBe(120));
    it("Calculate factorial of 10", () =>
      expect(calculateFactorial(10)).toBe(3628800));
    it("Check if the output is a number", () =>
      expect(calculateFactorial(5)).toBe(120));
    it("Handle negative input", () =>
      expect(() => calculateFactorial(-5)).toThrow());
  });
});
