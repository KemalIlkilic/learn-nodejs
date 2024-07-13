const fs = require("fs").promises;

async function readAndWriteFiles() {
  try {
    console.log("Start of program");

    console.log("About to read first file");
    const first = await fs.readFile("./content/first.txt", "utf-8");
    console.log("Finished reading first file");

    console.log("About to read second file");
    const second = await fs.readFile("./content/second.txt", "utf-8");
    console.log("Finished reading second file");

    await fs.writeFile("./content/result-async.txt", `${first}\n${second}`);
    console.log("Finished writing file");

    console.log("End of program");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

readAndWriteFiles();
console.log("This will be printed immediately");
