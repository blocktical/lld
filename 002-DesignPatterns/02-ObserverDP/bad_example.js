
class YouTubeChannel {
  constructor() {
    this.latestVideo = null;
  }

  uploadVideo(title) {
    this.latestVideo = title;
    console.log(`🎥 New video uploaded: ${title}`);

    // Directly notifying specific users (tightly coupled)
    console.log(`🔔 Rahul got notified: New video - ${title}`);
    console.log(`🔔 Anjali got notified: New video - ${title}`);
  }
}

const channel = new YouTubeChannel();
channel.uploadVideo("Observer Pattern in JS");
