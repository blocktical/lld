// Memento Class
class Memento {
    constructor(content) {
      this.content = content;
    }
  
    getContent() {
      return this.content;
    }
}
  
// Originator
class Editor {
    constructor() {
      this.content = '';
    }
  
    type(words) {
      this.content += words;
    }
  
    createMemento() {
      return new Memento(this.content);
    }
  
    restore(memento) {
      this.content = memento.getContent();
    }
  
    show() {
      console.log(`Current Content: "${this.content}"`);
    }
}
  
// Caretaker
class History {
    constructor() {
      this.stack = [];
    }
  
    save(memento) {
      this.stack.push(memento);
    }
  
    undo() {
      return this.stack.pop();
    }
}
  
// Demo
const editor = new Editor();
const history = new History();

editor.type("Hello, ");
history.save(editor.createMemento());

editor.type("world!");
history.save(editor.createMemento());

editor.type(" This will be removed.");
editor.show(); // Hello, world! This will be removed.

editor.restore(history.undo());
editor.show(); // Hello, world!

editor.restore(history.undo());
editor.show(); // Hello, 
  