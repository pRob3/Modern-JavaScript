let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 999,
  currentDate: new Date(),
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// Destructuring
const { firstName, lastName, age } = person;

console.log(firstName, lastName, age);

getAdress = () => {
  return {
    street: 'Majorna 123',
    city: 'Göteborg',
    state: 'Västra Götaland',
  };
};

const { street, city } = getAdress();

printName = (person) => {
  console.log(person.firstName);
};

printName2 = ({ firstName }) => {
  console.log(firstName);
};

// printName2(person);

const arr = [1, 2, 3, 4, 5];

const [first, second, , fourth, fifth] = arr;

console.log(second, fourth);
