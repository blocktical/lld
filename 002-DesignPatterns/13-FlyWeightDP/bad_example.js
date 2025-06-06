class Tree {
    constructor(type, color, texture, x, y) {
      this.type = type;
      this.color = color;
      this.texture = texture;
      this.x = x;
      this.y = y;
    }
  
    draw() {
      console.log(`Drawing ${this.type} tree at (${this.x}, ${this.y})`);
    }
  }
  
  // Create 10,000 trees (duplicate data!)
  let forest = [];
  for (let i = 0; i < 10000; i++) {
    forest.push(new Tree('Pine', 'Green', 'pine-texture.png', Math.random() * 100, Math.random() * 100));
  }
  
  console.log("Total Trees Created:", forest.length);