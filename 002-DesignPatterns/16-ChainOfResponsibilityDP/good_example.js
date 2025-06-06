// Base Handler
class Handler {
    setNext(handler) {
      this.next = handler;
      return handler;
    }
  
    handle(request) {
      if (this.next) {
        return this.next.handle(request);
      }
    }
  }
  
  // Logging Handler
  class LoggingHandler extends Handler {
    handle(request) {
      console.log("📋 Logging:", request.user);
      return super.handle(request);
    }
  }
  
  // Auth Handler
  class AuthHandler extends Handler {
    handle(request) {
      if (request.token !== "valid-token") {
        console.log("❌ Unauthorized");
        return;
      }
      console.log("✅ Authenticated");
      return super.handle(request);
    }
  }
  
  // Validation Handler
  class ValidationHandler extends Handler {
    handle(request) {
      if (!request.data) {
        console.log("❌ No data");
        return;
      }
      console.log("📦 Data validated");
      return super.handle(request);
    }
  }
  
  // Business Logic Handler
  class BusinessHandler extends Handler {
    handle(request) {
      console.log("🚀 Processing:", request.user);
    }
  }
  
  // Build the chain
  const logger = new LoggingHandler();
  const auth = new AuthHandler();
  const validation = new ValidationHandler();
  const business = new BusinessHandler();
  
  logger.setNext(auth).setNext(validation).setNext(business);
  
  // Simulate request
  const request = {
    user: "Tanuj",
    token: "valid-token",
    data: "Order#123",
  };
  
  logger.handle(request);
  