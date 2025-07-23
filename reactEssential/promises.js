//Promises

let promise = new Promise((resolve, reject) => {
  const i = 21;
  i === 21 ? resolve() : reject();
});

promise
  .then(() => console.log('Promise was resolve'))
  .catch(() => console.log('Promise was rejected'));

//pending
//result
//rejected
