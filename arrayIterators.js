//Array Objects
let studentInfo = [
  {
    id: 1,
    fName: 'Jomer',
    lName: 'Ubaldo',
    gender: 'M',
    age: 40,
    paid: 150,
    courses: ['JavaScript', 'React'],
  },
  {
    id: 2,
    fName: 'Lerma',
    lName: 'Cagnan',
    gender: 'F',
    married: false,
    age: 31,
    paid: 0,
    courses: ['Javascript', 'React'],
  },
  {
    id: 3,
    fName: 'Abby',
    lName: 'Gayle',
    gender: 'F',
    married: false,
    age: 21,
    paid: 350,
    courses: ['Javascript', 'React'],
  },
];
// map() is used to create new array
const newStudentInfo = studentInfo.map((student, index) => {
  return studentInfo;
});

console.log('\nThis is a map()\n', newStudentInfo);

//filter check if the value is true then the value shows if false not display
const newStudent = studentInfo.filter((studentInfo, index) => studentInfo.paid); // hanapin niya yong mataas sa 25 na value sa array object tapos yon yong ipapakita niya

console.log('\nThis is a filer()\n', newStudent);

//some() is check if the condition is true even one its return true then false it not
let askStudentBelow30 = studentInfo.some(
  (studentInfo, index) => studentInfo.age > 20
);

console.log('\nThis is a some()\n', askStudentBelow30);

//find() is check if the condition is true then if true shows data and if false return undifiend kahit na mataas sa 40 ang 30 kung sino yong mas mataas sa 30 yon yong uunahin niya even 31 is kasunod niya
let studentAbove30 = studentInfo.find(
  (studentInfo, index) => studentInfo.age > 30
);

console.log('\nThis is a find()\n', studentAbove30);

//reduce() calculate if how much user paid using paid: calculate
let totalCost = studentInfo.reduce(
  (accumulator, student, currentIndex, studentInfo) => {
    accumulator = accumulator + student.paid;
    return accumulator;
  },
  0 // defiend need how much start need atleast 0
);

console.log('\nThis is a reduce()\n', totalCost);
