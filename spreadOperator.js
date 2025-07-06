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
