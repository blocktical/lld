// Observer (Subscriber)
class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    notify(videoTitle) {
      console.log(`🔔 ${this.name} got notified: New video - ${videoTitle}`);
    }
  }
  
  // Subject (YouTube Channel)
  class YouTubeChannel {
    constructor(channelName) {
      this.channelName = channelName;
      this.subscribers = [];
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
  
    uploadVideo(title) {
      console.log(`\n🎥 New video uploaded: ${title}`);
      this.notifyAll(title);
    }
  
    notifyAll(title) {
      this.subscribers.forEach(sub => sub.notify(title));
    }
  }
  
  // --- Demo ---
  
  const channel = new YouTubeChannel("Blocktical By Examsbox");
  
  const rahul = new Subscriber("Rahul");
  const anjali = new Subscriber("Anjali");
  
  channel.subscribe(rahul);
  channel.subscribe(anjali);
  
  channel.uploadVideo("Observer Pattern in JS");
  
  channel.unsubscribe(rahul);
  
  channel.uploadVideo("Strategy Pattern in JS");
  