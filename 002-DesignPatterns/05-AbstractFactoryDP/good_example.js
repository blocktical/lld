// 🧱 Abstract Product Interfaces
class Button {
    render() {}
  }
  
  class Input {
    render() {}
  }
  
  // 🎨 Light Theme Products
  class LightButton extends Button {
    render() {
      console.log("🟨 Rendering Light Button");
    }
  }
  
  class LightInput extends Input {
    render() {
      console.log("📄 Rendering Light Input");
    }
  }
  
  // 🌑 Dark Theme Products
  class DarkButton extends Button {
    render() {
      console.log("⬛ Rendering Dark Button");
    }
  }
  
  class DarkInput extends Input {
    render() {
      console.log("📄 Rendering Dark Input");
    }
  }
  
  // 🏭 Abstract Factory
  class UIFactory {
    createButton() {}
    createInput() {}
  }
  
  // 🌕 Light UI Factory
  class LightUIFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
  
    createInput() {
      return new LightInput();
    }
  }
  
  // 🌑 Dark UI Factory
  class DarkUIFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
  
    createInput() {
      return new DarkInput();
    }
  }
  
  // ✅ Client Code
  function renderUI(factory) {
    const button = factory.createButton();
    const input = factory.createInput();
  
    button.render();
    input.render();
  }
  
  // Test
  const lightFactory = new LightUIFactory();
  const darkFactory = new DarkUIFactory();
  
  renderUI(lightFactory); // Light Theme
  renderUI(darkFactory);  // Dark Theme
  