const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

// No other code can run while a synchronous operation is in progress.
writeFileSync("./content/result-sync.txt", " (Bu bir eklemedir)", {
  flag: "a",
});

/*
What's happening:
When readFileSync is called, 
Node.js stops executing any further JavaScript.
It then performs the file read operation.
Only after the file is completely read and
 its content is returned does the execution move to the next line.




 Start of program
About to read first file
End of program  // or "This will be printed immediately" in the async/await version
Finished reading first file
About to read second file
Finished reading second file
Finished writing file
*/
