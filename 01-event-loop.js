const EventEmitter = require("events");
const http = require("http");

// Make a Sale class and inherit from EventEmitter
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

// Now we can create instance from Sale class
const myEmitter = new Sales();

// Normal Emit
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

// Normal Emit
myEmitter.on("newSale", () => {
  console.log("Customer name: Su");
});

// Emitter with args
myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stocks.`);
});

myEmitter.emit("newSale", 9);

/////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request received 😒");
  res.end("Another request received 😒");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});
