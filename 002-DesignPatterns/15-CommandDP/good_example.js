// Command Interface
class Command {
    execute() {}
    undo() {}
  }
  
  // Receiver
  class TextEditor {
    constructor() {
      this.content = "";
    }
  
    write(text) {
      this.content += text;
      console.log("✍️ Wrote:", text);
      console.log("📄 Content:", this.content);
    }
  
    delete(count) {
      const deleted = this.content.slice(-count);
      this.content = this.content.slice(0, -count);
      console.log("❌ Deleted:", deleted);
      console.log("📄 Content:", this.content);
    }
  }
  
  // Concrete Command
  class WriteCommand extends Command {
    constructor(editor, text) {
      super();
      this.editor = editor;
      this.text = text;
    }
  
    execute() {
      this.editor.write(this.text);
    }
  
    undo() {
      this.editor.delete(this.text.length);
    }
  }
  
  // Invoker
  class EditorInvoker {
    constructor() {
      this.history = [];
    }
  
    run(command) {
      command.execute();
      this.history.push(command);
    }
  
    undo() {
      const command = this.history.pop();
      if (command) {
        command.undo();
      }
    }
  }
  
  // Usage
  const editor = new TextEditor();
  const invoker = new EditorInvoker();
  
  const cmd1 = new WriteCommand(editor, "Hello ");
  const cmd2 = new WriteCommand(editor, "World!");
  
  invoker.run(cmd1); // Hello
  invoker.run(cmd2); // World!
  invoker.undo();    // Undo World!
  invoker.undo();    // Undo Hello
  