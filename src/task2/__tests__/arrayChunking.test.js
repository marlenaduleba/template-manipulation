const chunkArray = require("../arrayChunking");

describe("chunkArray", () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("should correctly chunk the array into smaller arrays of specified size", () => {
    const expectedResult = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ];
    expect(chunkArray(testArray, 2)).toEqual(expectedResult);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(chunkArray([], 2)).toEqual([]);
  });

  it("should return the original array if the chunk size is greater than or equal to the length of the array", () => {
    expect(chunkArray(testArray, 20)).toEqual([testArray]);
  });
});
