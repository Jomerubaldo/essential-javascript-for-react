// array map
const fruits = new Map([
  ['Apple', 500],
  ['Banana', 300],
  ['Orange', 200],
]);

// to add value in array map
// same name replace and price but not same name then add new value
fruits.set('Grapes', 400);
fruits.set('Melon', 200);
fruits.set('Papaya', 100);

// replace exsiting value
fruits.set('Melon', 50);

// need create new const and variable to get the seperate prize of item
// getting prize of fruit
const getValue = fruits.get('Orange');

console.log(getValue);
