class Order {
    constructor() {
      this.state = 'CREATED';
    }
  
    proceed() {
      if (this.state === 'CREATED') {
        console.log("Processing payment...");
        this.state = 'PAID';
      } else if (this.state === 'PAID') {
        console.log("Shipping order...");
        this.state = 'SHIPPED';
      } else if (this.state === 'SHIPPED') {
        console.log("Order delivered.");
        this.state = 'DELIVERED';
      } else {
        console.log("Invalid operation");
      }
    }
  }
  
  const order = new Order();
  order.proceed();
  order.proceed();
  order.proceed();
  