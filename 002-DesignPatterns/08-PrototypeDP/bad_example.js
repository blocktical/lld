class Product {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    display() {
      console.log(`${this.name} (${this.color})`);
    }
  }
  
  // Har baar naya object banana padh raha hai manually
  const product1 = new Product('Phone X', 'Black');
  const product2 = new Product('Phone X', 'Red');
  const product3 = new Product('Phone X', 'Blue');
  
  product1.display();
  product2.display();
  product3.display();