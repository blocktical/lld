const collection = ['video1', 'video2', 'video3'];

for (let i = 0; i < collection.length; i++) {
  console.log('Playing:', collection[i]);
}

// Can't reuse, as this is tightly couplled with the internal structure - Array