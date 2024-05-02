const {
  customFilterUnique,
  uniqueByName,
} = require("../advancedArrayFiltering");
const { people } = require("../../data/testData");

describe("customFilterUnique", () => {
  it("should return an array of unique elements based on the provided callback", () => {
    const expectedResult = [
      { name: "Emily Doe", age: 40 },
      { name: "Michael Johnson", age: 54 },
      { name: "Emily Johnson", age: 41 },
    ];

    expect(customFilterUnique(people, uniqueByName)).toEqual(expectedResult);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(customFilterUnique([], uniqueByName)).toEqual([]);
  });
});
