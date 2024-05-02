function getArrayIntersection(arr1, arr2) {
  return arr1.filter((el) => arr2.includes(el));
}

function getArrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

module.exports = { getArrayIntersection, getArrayUnion };
