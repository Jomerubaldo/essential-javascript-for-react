const button = document.querySelector('button');
const list = document.querySelector('#list');

const myFunction = () => {
  const input = document.querySelector('#inputText');
  const name = input.value;
  const li = document.createElement('li');

  li.textContent = name;
  list.appendChild(li);
  input.value = '';
};

button.addEventListener('click', myFunction);

const sayAdd = (a, b) => console.log(a + b);

sayAdd(222222222222, 5);

// invoke or function call
