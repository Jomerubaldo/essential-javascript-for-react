//Spread Operator Array
const taskList = ['Eat', 'Sleep'];
const completeList = [...taskList, 'Code', 'Repeat'];

document.querySelector('#demo').innerHTML = completeList;

//Spread Operator Object
const studentInfo = {
  name: 'Jomer',
  age: 21,
};

const addInfo = {
  ...studentInfo,
  course: 'BSIT',
  color: 'Black',
};

document.querySelector('#demo').innerHTML = addInfo;

//Spread Operator in Function
const addNumbers = [3, 5, 1];

function sum(a, b, c) {
  return a + b + c;
}
document.querySelector('#demo').innerHTML = sum(...addNumbers);

let userNameInfo = ['Jomer', 'Jelly', 'Mercy', 'Junior'];

const [person1, person2, person3, person4] = userNameInfo;

document.querySelector('#demo').innerHTML = `${person1} ${person2} ${rest.join(
  ' '
)}`;

// create array
// used destructuring operator
// combine with spreadOperator and console.log it

// i have error i cant apply spread operator here i need to fix this error
let userInfo = {
  personName: 'Lerma',
  personAge: 20,
  personCourse: 'BSIT',
};

let { personName, personAge, personCourse } = userInfo;

const userInfoNew1 = { personName, ...userInfo };

document.querySelector('#demo').innerHTML = userInfoNew1;

let userNew = {
  personName1: 'Lerma',
  personAge1: 20,
  personCourse1: 'BSIT',
};

const { personName1, personAge1, personCourse1 } = userNew;

document.querySelector(
  '#demo'
).innerHTML = `${personName1} ${personAge1} ${personCourse1}`;

const arrayFruit = ['Banana', 'Apple', 'Orange'];

for (const arrayFruits in arrayFruit) {
  console.log(arrayFruit[arrayFruits]);
}

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];

document.querySelector('#demo').innerHTML = arr3;

const bag1 = ['Baril', 'Bala', 'Granada'];

const bag2 = [...bag1, 'Ispada', 'Pistol'];

const bag3 = ['Ulo', 'Kamay', 'Paa', ...bag2];

document.querySelector('#demo').innerHTML = bag3;

// using destructuring operator and spread operator

// array1
const bag4 = ['lapis', 'ballpen', 'eraser'];

// array2
const bag5 = ['ruler', 'sharpener'];

// activity 1
// spread
const fullbag = [...bag4, ...bag5];

// destructuring
const [gamitA, gamitB, gamitC] = fullbag;

// final
document.querySelector('#demo').innerHTML = `${gamitA} ${gamitB} ${gamitC}`;

// object
const object = {
  name1: 'Jomer',
  age: 21,
  course1: 'Course',
  favoriteTool: 'Visual Studio Code',
};

// desttructuring
const { name1, course1 } = object;

// final
document.querySelector('#demo').innerHTML = `${name1} ${course1}`;

// activity 2
// array1
const tryingToBuy = ['Banana', 'Apple'];
// array2
const toBuy = ['Coffee', 'Milk'];
// spread
const totalBuy = [...tryingToBuy, ...toBuy];
// destructuring
const [first, second, third, four] = totalBuy;
// final
document.querySelector(
  '#demo'
).innerHTML = `Unang laman ng list: ${first} Second: ${second}`;
document.querySelector('#demo').innerHMTL = `Third: ${third} Four: ${four}`;

// object1
const student1 = {
  userName: 'Lerma',
  userAge: 20,
  userCourse: 'BSIT',
};

// object2
const student2 = {
  ...student1,
  personSection: 'A',
};
// destructuring
const { userName, userCourse, userSection } = student2;

// final
document.querySelector(
  '#demo'
).innerHTML = `Student name: ${userName} Student course: ${userCourse} Student Section: ${userSection}`;

// spread operator jump into another object
const array = [
  {
    name: 'Jomer',
    age: 21,
    course: 'BSIT',
  },
  {
    section: 'A',
    gender: 'M',
  },
  {
    location: 'Tacloban',
    region: 8,
  },
];

const arrayNew = [
  {
    ...array,
    location: 'Tacloban',
    region: 8,
  },
];

const array12 = [arrayNew];

document.querySelector('#demo').innerHTML = array12;

const array1 = ['BMW', 'FORD', 'MITSUBISHI'];

let emptyString = '';

for (let x of array1) {
  emptyString += x + ' ';
}

document.querySelector('#demo').innerHTML = emptyString;

const toys = ['Car', 'House', 'Barbie'];

//destructuring
const [Car, House] = toys;

for (let toy of toys) {
  document.querySelector('#demo').innerHTML = toy;
}

const user = {
  name: 'Jomer',
  age: 21,
  course: 'BSIT',
};

const { name, ...rest } = user;

document.querySelector(
  '#demo'
).innerHTML = `${name} ${rest.age} ${rest.course}`;
