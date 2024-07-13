const { readFile, writeFile } = require("fs");

/*
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the resut: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("succesfull");
      }
    );
  });
});

asynchronous operations allow other code to run 
while waiting for I/O operations to complete,
which is generally more efficient, especially for I/O-bound operations
like file reading or network requests.
*/
