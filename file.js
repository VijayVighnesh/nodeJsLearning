const fs = require("fs");

// read file

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data.toString());
// });

// write file

// fs.writeFile("./docs/blog1.txt", "Hello, this is blog 1!", () => {
//   console.log("File written successfully.");
// });

// update file

// fs.appendFile("./docs/blog1.txt", "\nAppending new content to blog 1.", () => {
//   console.log("File updated successfully.");
// });

// Directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log("Error deleting directory:", err);
//       return;
//     }
//     console.log("Directory deleted successfully.");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log("Error deleting directory:", err);
//       return;
//     }
//     console.log("Directory deleted successfully.");
//   });
// }

// delete file

// if (fs.existsSync("./docs/blog2.txt")) {
//   fs.unlink("./docs/blog2.txt", (err) => {
//     if (err) {
//       console.log("Error deleting file:", err);
//       return;
//     }
//     console.log("File deleted successfully.");
//   });
// }
