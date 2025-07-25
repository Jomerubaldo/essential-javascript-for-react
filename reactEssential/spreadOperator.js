//Spread Operator Array
const taskList = ['Eat', 'Sleep'];
const completeList = [...taskList, 'Code', 'Repeat'];

console.log(completeList);

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

console.log(addInfo);

//Spread Operator in Function
const addNumbers = [3, 5, 1];

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...addNumbers));

let userNameInfo = ['Jomer', 'Jelly', 'Mercy', 'Junior'];

const [person1, person2, person3, person4] = userNameInfo;

console.log(person1, person2, ...userNameInfo);

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

console.log(userInfoNew1);

let userNew = {
  personName1: 'Lerma',
  personAge1: 20,
  personCourse1: 'BSIT',
};

const { personName1, personAge1, personCourse1 } = userInfo;

console.log(personName1, personAge1, personCourse1);

const arrayFruit = ['Banana', 'Apple', 'Orange'];

for (const arrayFruits in arrayFruit) {
  console.log(arrayFruit[arrayFruits]);
}

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const bag1 = ['Baril', 'Bala', 'Granada'];

const bag2 = [...bag1, 'Ispada', 'Pistol'];

const bag3 = ['Ulo', 'Kamay', 'Paa', ...bag2];

console.log(bag3);

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
console.log(gamitA, gamitB, gamitC);
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
console.log(name1, course1);

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
console.log(`Unang laman ng list: ${first} Second: ${second}`);
console.log(`Third: ${third} Four: ${four}`);

// object1
const student1 = {
  name: 'Lerma',
  age: 20,
  course: 'BSIT',
};

// object2
const student2 = {
  ...student1,
  section: 'A',
};
// destructuring
const { name, course, section } = student2;
// final
console.log(
  `Student name: ${name} Student course: ${course} Student Section: ${section}`
);

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

console.log(array12);

const array1 = ['BMW', 'FORD', 'MITSUBISHI'];

let emptyString = '';

for (let x of array1) {
  emptyString += x + ' ';
}

console.log(emptyString);

const toys = ['Car', 'House', 'Barbie'];
//destructuring
const [Car, House] = toys;

for (let toy of toys) {
  console.log(Car, House);
}
