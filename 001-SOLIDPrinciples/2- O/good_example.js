// Base abstract class/interface for discount strategy
class DiscountStrategy {
    apply(price) {
      return price;
    }
  }
  
  // Concrete discount strategies
  class RegularCustomerDiscount extends DiscountStrategy {
    apply(price) {
      return price * 0.9;  // 10% discount
    }
  }
  
  class PremiumCustomerDiscount extends DiscountStrategy {
    apply(price) {
      return price * 0.8;  // 20% discount
    }
  }
  
  // DiscountCalculator uses strategy pattern — open to new discounts, no need to modify existing code
  class DiscountCalculator {
    constructor(discountStrategy) {
      this.discountStrategy = discountStrategy;
    }
  
    calculate(price) {
      return this.discountStrategy.apply(price);
    }
  }
  
  // Usage:
  const regularDiscount = new RegularCustomerDiscount();
  const premiumDiscount = new PremiumCustomerDiscount();
  
  const calculator1 = new DiscountCalculator(regularDiscount);
  console.log(calculator1.calculate(100));  // 90
  
  const calculator2 = new DiscountCalculator(premiumDiscount);
  console.log(calculator2.calculate(100));  // 80
  
  // If a new discount type is needed, just create a new class implementing DiscountStrategy
  class VIPCustomerDiscount extends DiscountStrategy {
    apply(price) {
      return price * 0.7;  // 30% discount
    }
  }
  
  const vipDiscount = new VIPCustomerDiscount();
  const calculator3 = new DiscountCalculator(vipDiscount);
  console.log(calculator3.calculate(100));  // 70
  