class RealImage {
    constructor(filename) {
      this.filename = filename;
      this.loadFromDisk(); // heavy work
    }
  
    loadFromDisk() {
      console.log(`Loading ${this.filename} from disk...`);
    }
  
    display() {
      console.log(`Displaying ${this.filename}`);
    }
  }
  
  // App
  const image1 = new RealImage("cat.png");
  const image2 = new RealImage("dog.png");
  
  image1.display();
  image2.display();