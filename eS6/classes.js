// plan
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // speak
  showProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
  }
}

// object
const product1 = new Product('Jacket', 199);

product1.showProduct();
