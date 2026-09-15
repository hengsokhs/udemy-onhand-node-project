// === Additional file (sample-module-1, sample-module-2)

// * wrapper
// console.log(arguments);
// console.log(require("module").wrapper);

// * module.exports
const C = require("./sample-module-1.js");
const cal1 = new C();
console.log("--- use module.exports");
console.log(cal1.add(1, 2));
console.log(cal1.multiply(2, 5));

// * exports
const Calulator2 = require("./sample-module-2.js");
console.log("--- use exports");
console.log(Calulator2.add(1, 2));
console.log(Calulator2.multiply(5, 2));

// * exports with destructuring
console.log("--- Use exports with Destructring");
const { add, multiply, devide } = require("./sample-module-2.js");
console.log("🚀 ~ add:", add(1, 2));
console.log("🚀 ~ multiply:", multiply(5, 3));
console.log("🚀 ~ devide:", devide(100, 10));

// * Caching
console.log("--- Use caching");
require("./sample-module-3.js")();
require("./sample-module-3.js")();
require("./sample-module-3.js")();