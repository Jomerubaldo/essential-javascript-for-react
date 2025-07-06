//Array Different Methods
const personNames = ['Jomer', 'Lerma', 'Abby', 'Hanna', 'Kimberly'];

//Push Method add value to the last index of array.
personNames.push('Jean');
console.log(personNames);

//Pop Method remove value to the last index of array.
personNames.pop();
console.log(personNames);

//Splice Method changes the content of aaray by removing or replacing
//the existing value and/or new value in place.
//first index is not remong his road just want add to the specific index
//second index is removed all of scope in the specific index then replace his index there
personNames.splice(3, 0, 'Jean');
console.log(personNames);

personNames.splice(0, 3, 'Angel');
console.log(personNames);
