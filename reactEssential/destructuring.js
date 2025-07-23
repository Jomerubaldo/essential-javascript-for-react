//Duestructuring Array
const array = ['Jomer', 21, 'BSIT'];

const [name1, age1, course1] = array;

console.log(name1, age1, course1);

//Destructuring object
const object = {
  name2: 'Jomer',
  age2: 21,
  course2: 'BSIT',
};

const { name: name2, age: age2, course: course2 } = object; // i change this code

console.log(name2, age2, course2);

//example
const x = ({ name, course }) => {
  console.log(`${name} Taking the course ${course}`);
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

const { name, age, course, colorHair } = user;

console.log(name, age, course, colorHair);

const userInfo = ['Jomer', 'Jelyy', 'Mercy', 'Junior'];

const [Jomer, Jelly, Mercy, Junior] = userInfo;

console.log(Jomer, Jelly, Mercy, Junior);
