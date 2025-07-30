// //Array Objects
// let studentInfo = [
//   {
//     id: 1,
//     fName: 'Jomer',
//     lName: 'Ubaldo',
//     gender: 'M',
//     age: 21,
//     paid: 150,
//     courses: ['JavaScript', 'React'],
//   },
//   {
//     id: 2,
//     fName: 'Lerma',
//     lName: 'Cagnan',
//     gender: 'F',
//     married: false,
//     age: 20,
//     paid: 0,
//     courses: ['Javascript', 'React'],
//   },
//   {
//     id: 3,
//     fName: 'Abby',
//     lName: 'Gayle',
//     gender: 'F',
//     married: false,
//     age: 21,
//     paid: 350,
//     courses: ['Javascript', 'React'],
//   },
// ];
// // map() is used to create new array
// const newStudentInfo = studentInfo.map((student) => ({ ...student }));
// document.querySelector('#demo').innerHTML = studentInfo;

// //filter check if the value is true then the value shows if false not display
// const newStudent = studentInfo.filter((studentInfo, index) => studentInfo.paid); // hanapin niya yong mataas sa 25 na value sa array object tapos yon yong ipapakita niya

// document.querySelector('#demo').innerHTML = `this is filer() ${newStudent}`;

// //some() is check if the condition is true even one its return true then false it not
// let askStudentBelow30 = studentInfo.some(
//   (studentInfo, index) => studentInfo.age > 20
// );

// document.querySelector(
//   '#demo'
// ).innerHTML = `this is a some() ${askStudentBelow30}`;

// //find() is check if the condition is true then if true shows data and if false return undifiend kahit na mataas sa 40 ang 30 kung sino yong mas mataas sa 30 yon yong uunahin niya even 31 is kasunod niya
// let studentAbove30 = studentInfo.find(
//   (studentInfo, index) => studentInfo.age > 30
// );

// document.querySelector(
//   '#demo'
// ).innerHTML = `this is a find() ${studentAbove30}`;

// //reduce() calculate if how much user paid using paid: calculate
// let totalCost = studentInfo.reduce(
//   (accumulator, student, currentIndex, studentInfo) => {
//     accumulator = accumulator + student.paid;
//     return accumulator;
//   },
//   0 // defiend need how much start need atleast 0
// );

// document.querySelector('#demo').innerHTML = `this is reduce() ${totalCost};`;

// // kaya e modify yong value niya pero ganon padin yong structure
// const addNums = [21, 32, 12, 54, 31];

// const mapAdd = addNums.map((num) => num * 2);

// document.querySelector('#demo').innerHTML = mapAdd;
// // output: 42, 64, 24, 108, 62

// // bibilangin niya kung ilan lang yong letters ng name kapag mataas sa 7 don niya lalabas yong names pero kapag less sa 7 empty ang lalabas
// const userNames = [
//   'Jomer Ubaldo',
//   'Jelly',
//   'Junior',
//   'Merly Ubaldo',
//   'Mercy',
//   'Jojie Ubaldo',
//   'Jerson',
// ];

// const filterNames = userNames.filter((userName) => userName.length > 7);

// console.log(filterNames);
// // output: ["Jomer Ubaldo", "Merly Ubaldo", "Jojie Ubaldo"]

// // create array of objects
// const users = [
//   { name: 'jomer', status: 'active' },
//   { name: 'jelly', status: 'inactive' },
//   { name: 'junior', status: 'active' },
//   { name: 'merly', status: 'inactive' },
//   { name: 'jerson', status: 'active' },
// ];

// // using filter to get the user have status active
// const activeUser = users.filter((user) => user.status === 'active');

// // using map at this time i get 3 user so i want to uppercase there first letter then add a crown emojie
// const modifiedNames = activeUser.map((user) => {
//   const capitalized = user.name.charAt(0).toUpperCase() + user.name.slice(1);
//   return capitalized + '👑';
// });

// console.log(modifiedNames);

// // find continue tommorow

// array of objects
const userNames = [
  { id: 1, name: 'Nica', age: 21 },
  { id: 2, name: 'Mauren', age: 20 },
  { id: 3, name: 'Abby', age: 22 },
  { id: 4, name: 'Lerma', age: 20 },
];

// manual
const person1 = userNames[0];
const person2 = userNames[1];
const person3 = userNames[2];
const person4 = userNames[3];

const display1 = `ID: ${person1.id} Name: ${person1.name} Age: ${person1.age} `;
const display2 = `ID: ${person2.id} Name: ${person2.name} Age: ${person2.age} `;
const display3 = `ID: ${person3.id} Name: ${person3.name} Age: ${person3.age} `;
const display4 = `ID: ${person4.id} Name: ${person4.name} Age: ${person4.age} `;

document.querySelector('#demo1').innerHTML = display1;
document.querySelector('#demo2').innerHTML = display2;
document.querySelector('#demo3').innerHTML = display3;
document.querySelector('#demo4').innerHTML = display4;

// the shorter the better
const userMap = userNames.map(
  (user) => `ID: ${user.id} Name: ${user.name} Age: ${user.age}`
);

document.querySelector('#demo5').innerHTML = userMap.join('<br/>');
