//Array Different Methods
const personNames = ['Jomer', 'Lerma', 'Abby', 'Hanna', 'Kimberly'];

//Push Method add value to the last index of array.
personNames.push('Jean');
console.log(personNames);

//Pop Method remove value to the last index of array.
personNames.pop();
console.log(personNames);

// first san mo gusto magsimula pede kadin mag add dyan tapos simula sa sinimulan mo ilan sila na gusto mo madelete na value
// tapos hindi ka dapat magsimula sa index lenght dapat
personNames.splice(3, 0, 'Karylle');
console.log(personNames);

//Includes chech if the value is inside if inside its return true then if not false
console.log(personNames.includes('Jomer'));

//Slice - first length number is delete and second length number is copy or get value
console.log(personNames.slice(1, 2));

//this is a essential for reactjs
