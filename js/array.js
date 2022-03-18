// In JavaScript: given an array of objects:

const people = [
  {
    name: 'Bob',
    age: 29,
  },
  {
    name: 'Alice',
    age: 42,
  },
  {
    name: 'Greg',
    age: 23,
  },
  {
    name: 'Jean',
    age: 50,
  },
]

// - Order the people by age in descending order

people.sort((a, b) => a.age - b.age)

// console.table(people)

// - Order the people by name alphabetically A-Z

people.sort((a, b) => (a.name > b.name ? 1 : -1))

// console.table(people)

// - Pull just the ages into a new array

peoplesAges = people.map(person => person.age)

// console.log(peoplesAges)
