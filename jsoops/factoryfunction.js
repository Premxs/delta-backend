function PersonMaker(name, age) { // It is replaced by classes
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, my name is ${this.name}`);
    },
  };

  return person;
}

// Code form Console.log from Browser 
let p1 = PersonMaker("adam", 25); // creating object using factory function
p1;
p1.talk(); // Output: Hi, my name is adam

let p2 = PersonMaker("eve", 25);
p2;
p2.talk(); // Output: Hi, my name is eve