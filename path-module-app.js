const path = require("path");

//console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
/* 
console.log(filePath);
/content/subfolder/text.txt 
*/

const base = path.basename(filePath);
/* 
console.log(base);
text.txt
*/

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
/* 
console.log(absolute);
/Users/kemalonurilkilic/Desktop/node-course/content/subfolder/test.txt
*/
