// Array
const array = ['Jomer', 21, 'BSIT'];

// destructuring
const [name1, age1, course1] = array;

document.querySelector('#demo').innerhHTML = `${name1} ${age1} ${course1}`;

// Object
const object = {
  name2: 'Jomer',
  age2: 21,
  course2: 'BSIT',
};

// destructuring
const { name: name2, age: age2, course: course2 } = object;

document.querySelector('#demo').innerHTML = `${name2} ${age2} ${course2}`;

//example
const x = ({ name, course }) => {
  document.querySelector(
    '#demo'
  ).innerHTML = `${name} Taking the course ${course}`;
};

const studenInfo = {
  name: 'Jomer',
  age: 21,
  course: 'BSIT',
};

x(studenInfo);
//
//
//
//
//
//
//
//
//
//
//

const user = {
  name: 'Jomer',
  age: 21,
  course: 'BSIT',
  colorHair: 'Black',
};

// destructuring
const { name, age, course, colorHair } = user;

document.querySelector(
  '#demo'
).innerHTML = `${name} ${age} ${course} ${colorHair}`;

const userInfo = ['Jomer', 'Jelyy', 'Mercy', 'Junior'];

const [person1, person2, person3, person4] = userInfo;

document.querySelector(
  '#demo'
).innerHTML = `${person1} ${person2} ${person3} ${person4}`;
