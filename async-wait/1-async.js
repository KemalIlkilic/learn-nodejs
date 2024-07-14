const { readFile } = require("fs/promises");

function getMessage() {
  return new Promise((resolve, reject) => {
    resolve(readFile("../content/first.txt", "utf-8"));
  });
}

async function main() {
  let message = await getMessage();
  console.log(message);
}

main();
