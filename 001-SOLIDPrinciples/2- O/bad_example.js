class DiscountCalculator {
    calculate(price, customerType) {
      if (customerType === "regular") {
        return price * 0.9;  // 10% discount
      } else if (customerType === "premium") {
        return price * 0.8;  // 20% discount
      }
      return price;  // no discount
    }
  }
  
  // Problem: If a new customerType comes, you have to modify this class.
  const calculator = new DiscountCalculator();
  console.log(calculator.calculate(100, "regular")); // 90
  console.log(calculator.calculate(100, "premium")); // 80
  
