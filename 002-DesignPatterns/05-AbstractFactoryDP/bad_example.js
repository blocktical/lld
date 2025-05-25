class LightButton {
    render() {
      console.log("🟨 Rendering Light Button");
    }
  }
  
  class DarkButton {
    render() {
      console.log("⬛ Rendering Dark Button");
    }
  }
  
  class LightInput {
    render() {
      console.log("📄 Rendering Light Input");
    }
  }
  
  class DarkInput {
    render() {
      console.log("📄 Rendering Dark Input");
    }
  }
  
  // ❌ Bad: Too many if-else based on theme
  function renderUI(theme) {
    let button, input;
  
    if (theme === "light") {
      button = new LightButton();
      input = new LightInput();
    } else if (theme === "dark") {
      button = new DarkButton();
      input = new DarkInput();
    }
  
    button.render();
    input.render();
  }
  
  // Test
  renderUI("light");
  renderUI("dark");
  