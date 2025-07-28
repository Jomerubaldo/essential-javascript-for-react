// Array Different Methods
const personNames = ['Jomer', 'Lerma', 'Abby', 'Hanna', 'Kimberly'];

//Push Method add value to the last index of array.
personNames.push('Jean');
document.querySelector('#demo').innerHTML = personNames;

//Pop Method remove value to the last index of array.
personNames.pop();
document.querySelector('#demo').innerHTML = personNames;

// first san mo gusto magsimula pede kadin mag add dyan tapos simula sa sinimulan mo ilan sila na gusto mo madelete na value
// tapos hindi ka dapat magsimula sa index lenght dapat
personNames.splice(3, 0, 'Karylle');
document.querySelector('#demo').innerHTML = personNames;

//Includes chech if the value is inside if inside its return true then if not false
document.querySelector('#demo11').innerHTML = personNames.includes('Jomer');

//Slice - first length number is delete and second length number is copy or get value
const sliceNames = personNames.slice(1, 4);
document.querySelector('#demo').innerHTML = sliceNames;

// new array
const friends = ['Jomer', 'Lerma', 'Abby', 'Mico', 'Joshua', 'Karen', 'Trish'];

const middleFriends = friends.slice(2, 5); // 2 is start in index then 5 is start in digit

friends.splice(5, 1, 'Zyra', 'Rica'); // 5 start in index then reset to zero then karen is the 1 now because its digit start not the index

document.querySelector('#demo').innerHTML = friends;
