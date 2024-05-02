function measureArrayPerformance(fn, arr) {
  const start = performance.now();
  if (Array.isArray(arr)) {
    if (Array.isArray(arr[0]) && Array.isArray(arr[1])) {
      fn(arr[0], arr[1]);
    } else {
      fn(arr);
    }
  }
  const end = performance.now();
  return end - start;
}

module.exports = measureArrayPerformance;
