class TextEditor {
    constructor() {
      this.content = "";
    }
  
    write(text) {
      this.content += text;
      console.log("Current Content:", this.content);
    }
  
    delete(count) {
      this.content = this.content.slice(0, -count);
      console.log("Current Content:", this.content);
    }
  }
  
  // Problem: No undo, logic is tightly coupled
  
  const editor = new TextEditor();
  editor.write("Hello ");
  editor.write("World!");
  editor.delete(6); // Hardcoded, not reversible dynamically
  