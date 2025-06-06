class Image {
    display() {}
  }
  
  class RealImage extends Image {
    constructor(filename) {
      super();
      this.filename = filename;
      this.loadFromDisk(); // heavy
    }
  
    loadFromDisk() {
      console.log(`Loading ${this.filename} from disk...`);
    }
  
    display() {
      console.log(`Displaying ${this.filename}`);
    }
  }
  
  class ProxyImage extends Image {
    constructor(filename) {
      super();
      this.filename = filename;
      this.realImage = null;
    }
  
    display() {
      if (this.realImage === null) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.display();
    }
  }
  
  // App
  const image1 = new ProxyImage("cat.png");
  const image2 = new ProxyImage("dog.png");
  
  // Nothing loads yet
  image1.display(); 
  image2.display(); 