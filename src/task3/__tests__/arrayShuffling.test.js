const customShuffle = require("../arrayShuffling");

describe("customShuffle", () => {
  it("should shuffle the array", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = customShuffle(inputArray);

    // Check if the input array is not modified
    expect(shuffledArray).not.toEqual(inputArray);

    // Check if the shuffled array contains the same elements as the original one
    expect(shuffledArray.sort()).toEqual(inputArray.sort());
  });

  it("should return an empty array when input array is empty", () => {
    expect(customShuffle([])).toEqual([]);
  });

  it("should return the same array when input array has only one element", () => {
    const inputArray = [1];
    expect(customShuffle(inputArray)).toEqual(inputArray);
  });

  it("should handle array with duplicate elements", () => {
    const inputArray = [1, 1, 2, 2, 3, 3];
    const shuffledArray = customShuffle(inputArray);

    // Check if the input array is not modified
    expect(shuffledArray).not.toEqual(inputArray);

    // Check if the shuffled array contains the same elements as the original one
    expect(shuffledArray.sort()).toEqual(inputArray.sort());
  });
});
