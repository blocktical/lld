class Mediator {
    constructor() {
        this.button = null;
        this.checkbox = null;
        this.textbox = null;
    }

    notify(sender, event) {
        if (sender === this.button && event === "click") {
            console.log("Mediator: Button clicked → checking checkbox");
            this.checkbox.check();
        } else if (sender === this.checkbox && event === "check") {
            console.log("Mediator: Checkbox checked → enabling textbox");
            this.textbox.enable();
        }
    }
}

class Button {
    constructor(mediator) {
        this.mediator = mediator;
    }

    click() {
        console.log("Button: clicked");
        this.mediator.notify(this, "click");
    }
}

class Checkbox {
    constructor(mediator) {
        this.mediator = mediator;
    }

    check() {
        console.log("Checkbox: checked");
        this.mediator.notify(this, "check");
    }
}

class TextBox {
    enable() {
        console.log("Textbox: enabled");
    }
}

// Setup
const mediator = new Mediator();

const button = new Button(mediator);
const checkbox = new Checkbox(mediator);
const textbox = new TextBox();

mediator.button = button;
mediator.checkbox = checkbox;
mediator.textbox = textbox;

button.click();
