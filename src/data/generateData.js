function generatePeopleArray(length) {
  const people = [];
  const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah"];
  const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Taylor", "Wilson"];

  for (let i = 0; i < length; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * 43) + 18;
    const person = { name: `${firstName} ${lastName}`, age };
    people.push(person);
  }
  return people;
}

function generateArray(size) {
  return Array.from({ length: size }, (el, index) => index);
}

module.exports = { generatePeopleArray, generateArray };
