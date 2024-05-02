function customFilterUnique(array, callback) {
  const count = new Map();
  const result = [];

  array.forEach((item) => {
    const key = callback(item);
    count.set(key, (count.get(key) || 0) + 1);
  });

  array.forEach((item) => {
    const key = callback(item);
    if (count.get(key) === 1) {
      result.push(item);
    }
  });

  return result;
}

const uniqueByName = (person) => person.name;

module.exports = { customFilterUnique, uniqueByName };
