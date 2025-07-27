// array
const userName = ['Jomer', 'Jojie', 'Jelly'];

document.querySelector(
  '.array'
).innerHTML = `User 1: ${userName[0]} <br/> User 2: ${userName[1]} <br/> User 3: ${userName[2]}`;

// object
const userInfo = {
  name: 'Jomer',
  age: 21,
  course: 'BSIT',
};

document.querySelector(
  '.object'
).innerHTML = `Name: ${userInfo.name} <br/> Age: ${userInfo.age} <br/> Course: ${userInfo.course}`;

// class

class StudentInfo {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  show() {
    return `Name: ${this.name} Age: ${this.age} Course: ${this.course}`;
  }
}

const details = new StudentInfo('Jomer', 21, 'BSIT');

document.querySelector('.class').innerHTML = details.show();
