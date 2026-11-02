// importing and exporting from directory

import apple from "./apple.js";
import banana from "./banana.js";
import orange from "./orange.js";

let fruits = [apple, banana, orange];

export default fruits;


//old way of writing this code
// const apple = require("./apple");
// const banana = require("./banana");
// const orange = require("./orange");

// let fruits = [apple, banana, orange];

// module.exports = fruits;