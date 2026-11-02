// using export for file

//latest way of writing this code..
export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const g = 9.8;
export const PI = 3.14;


//First way 
// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;

// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI,
// };

// module.exports = obj;




//Second Way
// onst sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;

// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI,
// };


//Third way
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;



//Fourth way
// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;
