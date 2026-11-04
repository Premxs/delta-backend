let arr = [1, 2, 3]; // object prototype concept
let arr2 = [1, 2, 3];
arr.sayHello = () => {
  console.log("hello!, i am arr"); // This uses diffent memory space than arr2, so arr2 will not have this method
};

arr2.sayHello = () => {
  console.log("hello!, i am arr");
};