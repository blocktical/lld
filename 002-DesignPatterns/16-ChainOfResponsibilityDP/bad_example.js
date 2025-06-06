const request = {
    user: "Tanuj",
    token: "invalid-token",
    data: null,
  };
  
  function handleRequest(req) {
    // Logging
    console.log("Logging request:", req.user);
  
    // Auth Check
    if (req.token !== "valid-token") {
      console.log("Unauthorized user");
      return;
    }
  
    // Validation
    if (!req.data) {
      console.log("Invalid request: No data");
      return;
    }
  
    // Business Logic
    console.log("Processing request for:", req.user);
  }
  
  handleRequest(request);