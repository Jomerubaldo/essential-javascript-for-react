// create set
const letters = new Set(['Girls', 'Food', 'Work']);

// add value to the set()
letters.add('Car');
letters.add('House');
letters.add('Money');

console.log(letters);

// create variables
const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';

// add set
letters.add(a);
letters.add(b);
letters.add(c);
letters.add(d);

//for of

text = '';

for (let letter of letters) {
  text += letter;
}
console.log(text);
