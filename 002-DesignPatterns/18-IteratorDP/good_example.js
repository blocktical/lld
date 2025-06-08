
// Step 1: Create an Iterator Interface
class Iterator {
    hasNext() {}
    next() {}
  }
  
  // Step 2: Concrete Iterator
  class VideoIterator extends Iterator {
    constructor(videos) {
      super();
      this.index = 0;
      this.videos = videos;
    }
  
    hasNext() {
      return this.index < this.videos.length;
    }
  
    next() {
      return this.videos[this.index++];
    }
  }
  
  // Step 3: Collection
  class VideoPlaylist {
    constructor() {
      this.videos = [];
    }
  
    add(video) {
      this.videos.push(video);
    }
  
    createIterator() {
      return new VideoIterator(this.videos);
    }
  }
  
  // Step 4: Client Code
  const playlist = new VideoPlaylist();
  playlist.add("Desi Bhai - Episode 1");
  playlist.add("Desi Bhai - Episode 2");
  playlist.add("Desi Bhai - Episode 3");
  
  const iterator = playlist.createIterator();
  
  while (iterator.hasNext()) {
    console.log("🎬 Playing:", iterator.next());
  }