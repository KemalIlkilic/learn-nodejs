const { result } = require("lodash");

const { readFile } = require("fs").promises;

const getText = (path) => {
  return new Promise((resolve, reject) => {
    resolve(readFile(path, "utf-8"));
  });
};

async function main() {
  const result = await getText("./content/first.txt");
  console.log(result);
}
main();
