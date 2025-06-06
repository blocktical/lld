// 📌 Smart Proxy
// Adds additional behavior like caching, logging, or ref counting.

class APIService {
    getData() {
      console.log("Real API call made.");
      return { data: Math.random() }; // simulate random API response
    }
}

class SmartProxyAPI {
    constructor() {
        this.apiService = new APIService();
        this.cache = null;
    }

    getData() {
        if (this.cache) {
        console.log("Returning cached data.");
        return this.cache;
        }
        this.cache = this.apiService.getData();
        return this.cache;
    }
}

// ✅ Usage
const api = new SmartProxyAPI();
console.log(api.getData()); // Real call
console.log(api.getData()); // Cached result
