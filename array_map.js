// example 1:
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((x) => x * x);

// console.log(squares);

// example 2:
const people = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Jack', age: 35 },
];

const ids = people.map((person) => person.id);
// console.log(ids);

// example 3:
const divs = numbers.map((number) => `<div>${number}</div>`);
console.log(divs);
