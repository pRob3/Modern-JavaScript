let lastName = 'Doe';
lastName = 'Smith';
let age = 999;
let birthDate = new Date();

let propertyName = 'country';
let propertyValue = 'Norway';

let person = {
  [propertyName]: propertyValue,
  firstName: 'John',
  lastName,
  age,
  birthDate: new Date(),
  normalFunction() {
    console.log('normal function', this);
  },
  arrowFunction: () => {
    console.log('arrow function', this);
  },
};

console.log(person.age);
person.normalFunction();
person.arrowFunction();
console.log(person);
console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop];
console.log(returnValueFromPerson('lastName'));
