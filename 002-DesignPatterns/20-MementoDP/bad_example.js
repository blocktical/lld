class Editor {
    constructor() {
      this.content = '';
    }
  
    type(words) {
      this.content += words;
    }
  
    show() {
      console.log(`Current Content: "${this.content}"`);
    }
}
  
// No undo functionality
const editor = new Editor();

editor.type("Hello, ");
editor.type("world!");
editor.show(); // "Hello, world!"

// Oops! No way to undo now.
  