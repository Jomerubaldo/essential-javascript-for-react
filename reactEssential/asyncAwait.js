//Async and await in javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const fetchPromise = async () => {
  const res = await fetch(url);
  const response = await res.json();
  document.querySelector('#demo').innerHTML = response;
};

fetchPromise();
