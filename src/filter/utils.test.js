import { filterUniqueStrings, filterByProperty } from "./utils";

describe("testing filter", () => {
  describe("testing filterUniqueStrings", () => {
    it("test to Filters out duplicate strings", () =>
      expect(
        filterUniqueStrings([
          "apple",
          "banana",
          "cherry",
          "apple",
          "date",
          "banana"
        ])
      ).toEqual(["apple", "banana", "cherry", "date"]));

    it("test to Handles empty input array", () =>
      expect(filterUniqueStrings([])).toEqual([]));

    it("test to Handles input with all unique strings", () =>
      expect(filterUniqueStrings(["one", "two", "three"])).toEqual([
        "one",
        "two",
        "three"
      ]));

    it("test to Handles input with one repeated string", () =>
      expect(filterUniqueStrings(["apple", "apple", "apple"])).toEqual([
        "apple"
      ]));

    it("test to Checks if the output array contains only unique strings", () =>
      expect(
        filterUniqueStrings(["apple", "banana", "cherry", "date"])
      ).toEqual(["apple", "banana", "cherry", "date"]));

    it("test to Checks if the function throws an error with invalid input", () =>
      expect(() => filterUniqueStrings("invalid")).toThrow());

    it("test to Checks if the output array length is correct", () => {
      const arr = ["apple", "banana", "cherry", "apple", "date", "banana"];
      const resultedArr = filterUniqueStrings(arr);
      expect(resultedArr).toHaveLength(4);
      expect(resultedArr).toEqual(["apple", "banana", "cherry", "date"]);
    });
  });

  describe("test to filterByProperty", () => {
    it("test Filters objects with specified property", () =>
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { color: "yellow" },
            { name: "cherry", color: "red" }
          ],
          "name"
        )
      ).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" }
      ]));

    it("test to Handle empty input array", () =>
      expect(filterByProperty([], "name")).toEqual([]));

    it("test to Handle objects with property having falsy values", () =>
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { size: 0 },
            { name: "cherry", color: "red" }
          ],
          "size"
        )
      ).toEqual([{ size: 0 }]));

    it("test to Checks if the output array contains only objects with the specified property", () =>
      expect(
        filterByProperty(
          [
            { name: "apple", color: "red" },
            { color: "yellow" },
            { name: "cherry", color: "red" }
          ],
          "name"
        )
      ).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" }
      ]));

    it("test to Check if the function throws an error with invalid input", () =>
      expect(() => filterByProperty("invalid", "name")).toThrow());
  });
});
