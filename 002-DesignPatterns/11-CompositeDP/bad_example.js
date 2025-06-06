
const file1 = { name: "file1.txt", size: 10 };
const file2 = { name: "file2.txt", size: 20 };
const file3 = { name: "file3.txt", size: 5 };

const folder = {
  name: "SubFolder",
  files: [file3],
};

const root = {
  name: "Root",
  files: [file1, file2],
  folders: [folder],
};

function getTotalSize(root) {
  let size = 0;

  root.files.forEach(f => size += f.size);
  root.folders.forEach(f => {
    f.files.forEach(ff => size += ff.size);
  });

  return size;
}

console.log("Total size:", getTotalSize(root) + "KB");