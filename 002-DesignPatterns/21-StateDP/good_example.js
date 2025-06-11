class State {
    proceed(order) {
      throw "Not implemented";
    }
}
  
class CreatedState extends State {
    proceed(order) {
      console.log("Processing payment...");
      order.setState(new PaidState());
    }
}
  
class PaidState extends State {
    proceed(order) {
      console.log("Shipping order...");
      order.setState(new ShippedState());
    }
}
  
class ShippedState extends State {
    proceed(order) {
      console.log("Order delivered.");
      order.setState(new DeliveredState());
    }
}

class DeliveredState extends State {
    proceed(order) {
      console.log("Order already delivered.");
    }
}
  
class Order {
    constructor() {
      this.state = new CreatedState();
    }
  
    setState(state) {
      this.state = state;
    }
  
    proceed() {
      this.state.proceed(this);
    }
  }
  
// Usage
const order = new Order();
order.proceed();
order.proceed();
order.proceed();
order.proceed();
  