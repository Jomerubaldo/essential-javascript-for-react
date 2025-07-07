let studentInfo = [
  {
    id: 1,
    fName: 'Jomer',
    lName: 'Ubaldo',
    gender: 'M',
    age: 22,
    paid: 150,
    courses: ['JavaScript', 'React'],
  },
  {
    id: 2,
    fName: 'Lerma',
    lName: 'Cagnan',
    gender: 'F',
    married: false,
    age: 32,
    paid: 0,
    courses: ['Javascript', 'React'],
  },
  {
    id: 3,
    fName: 'Abby',
    lName: 'Gayle',
    gender: 'F',
    married: false,
    age: 27,
    paid: 350,
    courses: ['Javascript', 'React'],
  },
];
// map() is used to create new array
// const newStudent = studentInfo.map((student, index) => {
//   return studentInfo;
// });

// console.log(newStudent);

//filter check if the value is true then the value shows if false not display
const newStudent = studentInfo.filter((studentInfo, index) => studentInfo.paid); // hanapin niya yong mataas sa 25 na value sa array object tapos yon yong ipapakita niya

console.log(newStudent);
