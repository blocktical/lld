class Laptop {
    constructor() {
      this.processor = null;
      this.ram = null;
      this.storage = null;
      this.os = null;
      this.graphics = null;
    }
  }
  
  class LaptopBuilder {
    constructor() {
      this.laptop = new Laptop();
    }
  
    setProcessor(processor) {
      this.laptop.processor = processor;
      return this;
    }
  
    setRAM(ram) {
      this.laptop.ram = ram;
      return this;
    }
  
    setStorage(storage) {
      this.laptop.storage = storage;
      return this;
    }
  
    setOS(os) {
      this.laptop.os = os;
      return this;
    }
  
    setGraphics(graphics) {
      this.laptop.graphics = graphics;
      return this;
    }
  
    build() {
      return this.laptop;
    }
  }
  
  // 👷 Build laptop step-by-step
  const myLaptop = new LaptopBuilder()
    .setProcessor("i7")
    .setRAM("16GB")
    .setStorage("512GB")
    .setOS("Windows 11")
    .setGraphics("NVIDIA")
    .build();
  
  console.log(myLaptop);
  