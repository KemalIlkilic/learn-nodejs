const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data received `);
});

customEmitter.on("response", () => {
  console.log(`some other logic `);
});

customEmitter.on("response_other", () => {
  console.log(`some other other logic `);
});

customEmitter.emit("response");
