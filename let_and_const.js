'use strict';

// for (let x = 1; x <= 10; x++) {}
// console.log(x);

let firstName = 'John';
const lastName = 'Doe';
//lastName = 'Smith'; // assignment operation

console.log(firstName + ' ' + lastName);

let age = 999;
let birthDate = new Date();

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 999,
  birthDate: new Date(),
};

let dublicate = function (value) {
  return value * 2;
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Banana',
};

person2.firstName = 'Sean'; // We are not reassigning the variable, we are changing the value of the property

console.log(person2);
