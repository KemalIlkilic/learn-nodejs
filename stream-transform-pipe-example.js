const fs = require("fs");
const { Transform } = require("stream");

// this is creating a custom Transform stream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert the chunk (buffer) to a string
    let str = chunk.toString();

    // Convert the string to uppercase
    let upperCaseStr = str.toUpperCase();

    // Push the transformed data to the output
    this.push(upperCaseStr);

    /*
    Callback is the third parameter of the transform function. It's provided by Node.js, not defined in your code.
    What's Happening:
     Your function receives the callback as an argument.
     You call this callback() when you're done processing the chunk.
     This tells Node.js that you're ready for the next chunk.

    Why You Don't See It Defined:
    The callback is part of the Node.js streams API.
    It's injected into your transform function when it's called.
    You don't define it; you just use it.
    */
    // Signal that we're done with this chunk
    callback();
  },
});

fs.createReadStream("input.txt")
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream("output.txt"))
  .on("finish", () => console.log("Processing complete!"));
