// option 1
const hello = (name, age) => {
  document.querySelector(
    '#demo'
  ).innerHTML = `Hello, ${name} you are old ${age}`;
};

hello('Jomer', 21);

// option 2
setTimeout(() => (document.querySelector('#demo1').innerHTML = 'Hello!'), 3000);

// option 3

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const odNums = numbers.filter((element) => element % 2 !== 0);
const totalNums = numbers.reduce(
  (accumulator, element) => accumulator + element,
  0
);

document.querySelector('#demo2').innerHTML = squares;
document.querySelector('#demo3').innerHTML = cubes;
document.querySelector('#demo4').innerHTML = evenNums;
document.querySelector('#demo5').innerHTML = odNums;
document.querySelector('#demo6').innerHTML = totalNums;
