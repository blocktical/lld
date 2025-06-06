// Flyweight class: shared data
class TreeType {
    constructor(type, color, texture) {
      this.type = type;
      this.color = color;
      this.texture = texture;
    }
  
    draw(x, y) {
      console.log(`Drawing ${this.type} tree with ${this.texture} at (${x}, ${y})`);
    }
  }
  
  // Factory for managing flyweights
  class TreeFactory {
    constructor() {
      this.treeTypes = {};
    }
  
    getTreeType(type, color, texture) {
      const key = `${type}_${color}_${texture}`;
      if (!this.treeTypes[key]) {
        this.treeTypes[key] = new TreeType(type, color, texture);
      }
      return this.treeTypes[key];
    }
  }
  
  // Tree context: only extrinsic data
  class Tree {
    constructor(x, y, treeType) {
      this.x = x;
      this.y = y;
      this.treeType = treeType;
    }
  
    draw() {
      this.treeType.draw(this.x, this.y);
    }
  }
  
  // Client code
  const factory = new TreeFactory();
  const forest = [];
  
  for (let i = 0; i < 10000; i++) {
    const type = factory.getTreeType('Pine', 'Green', 'pine-texture.png');
    forest.push(new Tree(Math.random() * 100, Math.random() * 100, type));
  }
  
  console.log("Total Trees Created:", forest.length);
  console.log("Unique Tree Types:", Object.keys(factory.treeTypes).length);
  
  forest[0].draw();
  