import { capitalizeValues, findDuplicates } from "./utils";

describe("testing map", () => {
  describe("test to capitalizeValues", () => {
    it("test to Capitalize firset letter of all strings in the array", () => {
      const arr = ["apple", "banana", "cherry"];
      expect(capitalizeValues(arr)).toEqual(["Apple", "Banana", "Cherry"]);
    });

    it("test to Handle empty input array", () =>
      expect(capitalizeValues([])).toEqual([]));

    it("test to Capitalize strings with spaces", () =>
      expect(capitalizeValues(["hello world", "goodbye space"])).toEqual([
        "Hello world",
        "Goodbye space"
      ]));

    it("test to Capitalize strings with special characters", () =>
      expect(capitalizeValues(["!@#", "$%^"])).toEqual(["!@#", "$%^"]));

    it("test to Capitalize and check mixed case strings", () =>
      expect(capitalizeValues(["loRem", "IpSum", "DoLor"])).toEqual([
        "Lorem",
        "Ipsum",
        "Dolor"
      ]));

    it("test to Original array remains unchanged", () => {
      const arr = ["abc", "def"];
      const dupArr = [...arr];
      const resultedArr = capitalizeValues(arr);
      expect(arr).toEqual(dupArr);
      expect(resultedArr).not.toBe(arr);
      expect(resultedArr).toEqual(["Abc", "Def"]);
    });
  });

  describe("Test to findDuplicates", () => {
    it("test to Find duplicates in an array", () =>
      expect(findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 7])).toEqual([2, 3]));
    it("test to Handle array with no duplicates", () =>
      expect(findDuplicates([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([]));
    it("test to Find duplicates with negative numbers", () =>
      expect(findDuplicates([1, -2, 3, -2, 4, 5, 3, -6, 7])).toEqual([-2, 3]));
    it("test to Find duplicates with floating-point numbers", () =>
      expect(findDuplicates([1.5, 2.3, 1.5, 4.8, 2.3])).toEqual([1.5, 2.3]));
    it("test to Handle empty input array", () =>
      expect(findDuplicates([])).toEqual([]));
  });
});