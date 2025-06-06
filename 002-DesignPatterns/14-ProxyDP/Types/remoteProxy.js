// 📌 Remote Proxy
// Acts as a local representative for an object that lives in a different address space or network.

class RemoteService {
    fetchData() {
      console.log("Fetching data from remote server...");
    }
  }
  
class RemoteProxy {
    constructor() {
      this.remoteService = new RemoteService();
    }
  
    fetchData() {
      console.log("Connecting to remote service...");
      this.remoteService.fetchData();
    }
}
  
// ✅ Usage
const api = new RemoteProxy();
api.fetchData(); // Simulates network request
