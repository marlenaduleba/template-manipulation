const { customFilterUnique } = require("../../task1/advancedArrayFiltering");
const chunkArray = require("../../task2/arrayChunking");
const customShuffle = require("../../task3/arrayShuffling");
const {
  getArrayIntersection,
  getArrayUnion,
} = require("../../task4/arrayIntersectionAndUnion");
const measureArrayPerformance = require("../arrayPerformanceAnalysis");
const {
  generatePeopleArray,
  generateArray,
} = require("../../data/generateData");

function performanceTest() {
  const peopleArray = generatePeopleArray(10000);
  const mediumArray = generateArray(10000);
  const largeArray = generateArray(100000);

  console.log("Testing built-in methods:");
  console.log(
    "Built-in map:",
    measureArrayPerformance((arr) => arr.map((x) => x * 2), mediumArray),
    "ms"
  );
  console.log(
    "Built-in filter:",
    measureArrayPerformance(
      (arr) => arr.filter((x) => x % 2 === 0),
      mediumArray
    ),
    "ms"
  );
  console.log(
    "Built-in reduce:",
    measureArrayPerformance(
      (arr) => arr.reduce((acc, curr) => acc + curr, 0),
      mediumArray
    ),
    "ms"
  );

  console.log("Testing custom functions:");
  console.log(
    "Custom filter:",
    measureArrayPerformance(
      (arr) => customFilterUnique(arr, (person) => person.name),
      peopleArray
    ),
    "ms"
  );
  console.log(
    "Array chunking:",
    measureArrayPerformance((arr) => chunkArray(arr, 10), mediumArray),
    "ms"
  );
  console.log(
    "Custom shuffle:",
    measureArrayPerformance(customShuffle, mediumArray),
    "ms"
  );
  console.log(
    "Array intersection:",
    measureArrayPerformance(getArrayIntersection, [mediumArray, largeArray]),
    "ms"
  );
  console.log(
    "Array union:",
    measureArrayPerformance(getArrayUnion, [mediumArray, largeArray]),
    "ms"
  );
}

performanceTest();
