// 📌 Virtual Proxy
// Delays the creation/loading of an expensive object until it is actually needed.

class RealImage {
    constructor(filename) {
      this.filename = filename;
      this.loadFromDisk(); // expensive operation
    }
  
    loadFromDisk() {
      console.log(`Loading ${this.filename} from disk...`);
    }
  
    display() {
      console.log(`Displaying ${this.filename}`);
    }
}
  
class VirtualProxyImage {
    constructor(filename) {
      this.filename = filename;
      this.realImage = null;
    }
  
    display() {
      if (!this.realImage) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.display();
    }
}
  
// ✅ Usage
const image = new VirtualProxyImage("large-poster.png");
console.log("Image created, but not loaded yet.");
image.display(); // now it loads and displays
  