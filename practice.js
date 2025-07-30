const products = [
  { id: 1, name: 'Laptop', price: 1500, isStock: false },
  { id: 2, name: 'Tshirt', price: 200, isStock: true },
  { id: 3, name: 'Pants', price: 150, isStock: true },
  { id: 4, name: 'Brief', price: 50, isStock: true },
  { id: 5, name: 'Bag', price: 500, isStock: false },
];

// if available
const productAvail = products.filter((product) => product.isStock === true);

// display available
// hindi pwede kumuha dito ng variable na showProduct tapos papasa sa find kasi naka string to so kuha ka sa filter nalang ng variable
const showProduct = productAvail.map(
  (showProduct) => `Name: ${showProduct.name} <br/> Price: ${showProduct.price}`
);

document.querySelector('#demo').innerHTML = showProduct.join('<br/>');

// specific product
const productBuy = productAvail.find((buy) => buy.name === 'Tshirt');

document.querySelector(
  '#demo1'
).innerHTML = `Name: ${productBuy.name} Price: ${productBuy.price}`;

// You have a list of items in a user's cart.

// You need to:

// Filter the products that are still available (inStock: true)

// Map them into a format like "Product Name - ₱Price"

// Find a specific product like "Monitor"

// Reduce the total price to show a "Total Amount"

// Use setTimeout to simulate a delay (like loading the data from a server)
