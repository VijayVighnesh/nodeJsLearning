const fs = require("fs");

const readStream = fs.createReadStream("./docs/blogs3.txt");
const writeStream = fs.createWriteStream("./docs/blogs4.txt");

// readStream.on("data", (chunk) => {
//   console.log("----NEW Chunks -----");
//   console.log(chunk);
// });
