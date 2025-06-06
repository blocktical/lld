// 📌 Protection Proxy
// Controls access to sensitive objects by checking user permissions.

class File {
    constructor(filename) {
      this.filename = filename;
    }
  
    delete() {
      console.log(`${this.filename} has been deleted.`);
    }
}
  
class ProtectionProxyFile {
    constructor(filename, userRole) {
      this.file = new File(filename);
      this.userRole = userRole;
    }
  
    delete() {
      if (this.userRole === "admin") {
        this.file.delete();
      } else {
        console.log("Access Denied: Only admins can delete files.");
      }
    }
}
  
// ✅ Usage
const userFile = new ProtectionProxyFile("confidential.pdf", "user");
userFile.delete(); // ❌ Access Denied

const adminFile = new ProtectionProxyFile("confidential.pdf", "admin");
adminFile.delete(); // ✅ File deleted
  