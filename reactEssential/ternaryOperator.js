// ternary Operator
let grade = 75;
let condition =
  grade >= 90 ? 'Excellent' : grade >= 75 ? 'Passed' : 'Try again';

console.log('OverAll Remark:', condition);

// u can apply ternary in function
function getFee(fee) {
  return fee ? '$90.00' : '45.00';
}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));
console.log(getFee(0));
console.log(getFee(NaN));

// ternary operator
const userAge = 18;

const userConfirmation =
  userAge > 17 ? 'Yes u can vote!' : 'Sorry, u cant vote!';

console.log(userConfirmation);

// nested ternary Operator but not recommended beacause hard to read
const userGrade = 90;

const totalGrade =
  userGrade >= 90
    ? 'Greate Job'
    : userGrade >= 86
    ? 'Good Job'
    : userGrade >= 74
    ? 'Passed'
    : 'Failed';

console.log(totalGrade);
