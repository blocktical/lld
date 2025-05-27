class Product {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    clone() {
      // Shallow clone – Object.assign se copy
      return new Product(this.name, this.color);
    }
  
    display() {
      console.log(`${this.name} (${this.color})`);
    }
  }
  
  // Ek base object banao
  const baseProduct = new Product('Phone X', 'Black');
  baseProduct.display();
  
  // Clone karo aur modify karo
  const redProduct = baseProduct.clone();
  redProduct.color = 'Red';
  redProduct.display();
  
  const blueProduct = baseProduct.clone();
  blueProduct.color = 'Blue';
  blueProduct.display();
  