class Laptop {
    constructor(processor, ram, storage, os, graphics) {
      this.processor = processor;
      this.ram = ram;
      this.storage = storage;
      this.os = os;
      this.graphics = graphics;
    }
  
    getSpecs() {
      console.log(`Laptop: ${this.processor}, ${this.ram}, ${this.storage}, ${this.os}, ${this.graphics}`);
    }
  }
  
  // Creating directly with constructor - not readable
  const gamingLaptop = new Laptop("i7", "16GB", "512GB", "Windows 11", "NVIDIA");
  gamingLaptop.getSpecs();