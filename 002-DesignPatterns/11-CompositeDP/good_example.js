class FileSystemItem {
    getSize() {}
    showStructure(indent = "") {}
  }
  
  // Leaf
  class File extends FileSystemItem {
    constructor(name, size) {
      super();
      this.name = name;
      this.size = size;
    }
  
    getSize() {
      return this.size;
    }
  
    showStructure(indent = "") {
      console.log(`${indent}📄 ${this.name} (${this.size}KB)`);
    }
  }
  
  // Composite
  class Folder extends FileSystemItem {
    constructor(name) {
      super();
      this.name = name;
      this.children = [];
    }
  
    add(item) {
      this.children.push(item);
    }
  
    getSize() {
      return this.children.reduce((total, item) => total + item.getSize(), 0);
    }
  
    showStructure(indent = "") {
      console.log(`${indent}📁 ${this.name}`);
      this.children.forEach(child => child.showStructure(indent + "  "));
    }
  }
  
  // Usage
  const file1 = new File("file1.txt", 10);
  const file2 = new File("file2.txt", 20);
  const file3 = new File("file3.txt", 5);
  
  const subFolder = new Folder("SubFolder");
  subFolder.add(file3);
  
  const root = new Folder("Root");
  root.add(file1);
  root.add(file2);
  root.add(subFolder);
  
  root.showStructure();
  console.log("Total size:", root.getSize() + "KB");