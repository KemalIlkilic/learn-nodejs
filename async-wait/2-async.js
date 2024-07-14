const { readFile, writeFile } = require("fs/promises");

async function main() {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile("./content/result-mind-grenade.txt", "THIS IS THE DATA");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
}
main();

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    resolve(readFile(path, "utf-8"));
  });
}; */
