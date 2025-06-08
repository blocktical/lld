class Button {
    constructor() {
        this.checkbox = null; // tightly coupled
    }

    click() {
        console.log("Button clicked");
        if (this.checkbox) this.checkbox.check();
    }
}

class Checkbox {
    constructor() {
        this.textbox = null; // tightly coupled
    }

    check() {
        console.log("Checkbox checked");
        if (this.textbox) this.textbox.enable();
    }
}

class TextBox {
    enable() {
        console.log("Textbox enabled");
    }
}

// All components know about each other = tightly coupled
const button = new Button();
const checkbox = new Checkbox();
const textbox = new TextBox();

button.checkbox = checkbox;
checkbox.textbox = textbox;

button.click();