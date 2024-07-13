// console.log("__filename:", __filename);
// console.log("__dirname:", __dirname);

// MODULES
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//const names = require("./1th-day-partone-names");
const myFunc = require("./1th-day-partone-utils");
const { nameTwo, nameThree } = require("./1th-day-partone-names");

myFunc(nameThree);
myFunc(nameTwo);
