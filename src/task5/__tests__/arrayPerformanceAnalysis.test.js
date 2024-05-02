const assert = require("assert");
const customShuffle = require("../../task3/arrayShuffling");
const measureArrayPerformance = require("../arrayPerformanceAnalysis");

describe("measureArrayPerformance", () => {
  it("should measure the performance of the provided function with the given array", () => {
    const arr = [1, 2, 3, 4, 5];
    const timeTaken = measureArrayPerformance(customShuffle, arr);

    assert.strictEqual(
      typeof timeTaken,
      "number",
      "Time taken should be a number"
    );
    assert.ok(timeTaken > 0, "Time taken should be greater than 0");
    assert.ok(timeTaken < 1000, "Time taken should be less than 1000ms");
  });
});
