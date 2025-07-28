//Promises

let promise = new Promise((resolve, reject) => {
  const i = 21;
  i === 21 ? resolve() : reject();
});

promise
  .then(
    () => (document.querySelector('#demo').innerHTML = 'Promise was resolve')
  )
  .catch(
    () => (document.querySelector('#demo1').innerHTML = 'Promise was rejected')
  );
// output Promise was resolve

//pending
//result
//rejected
