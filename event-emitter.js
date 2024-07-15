const EventEmitter = require("events");

const customEmitter = new EventEmitter();

/* customEmitter.on("response", () => {
  console.log(`data received `);
});

customEmitter.on("response", () => {
  console.log(`some other logic `);
});

customEmitter.on("response_other", () => {
  console.log(`some other other logic `);
});

customEmitter.emit("response"); */

customEmitter.on("response", (name = "kemal", id = 123) => {
  console.log(`data received user: ${name} with id: ${id}`);
});
customEmitter.emit("response", "John", "666");
