// ("use strict");

const string = "Hello, my name is John Doe.";

const nameRegex = string.search(/john/i);

console.log(nameRegex);

try {
  console.log("Hello World");
} catch (err) {
  console.log(err);
}

function concat(a, b) {
  console.log(a + b);
}

concat(4, 5);

let x = 5;
x = 10;
console.log(x);

function A() {
  let x;
  x = 10;

  console.log(x);
}

A();

f = 56;

console.log(f);

// this section
const person = {
  firstName: "Abdullah",
  lastName: "Jubayer",
  id: 645874,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullname: function () {
    return this.fullName();
  },
};

console.log(person.getFullname());

const person1 = {
  fullName2: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "Jubayer",
  lastName: "Khan",
  id: 645874,
};

console.log(person1.fullName2.call(person2));

const helloWorld = () => {
  return "Hello World";
};

console.log(helloWorld());

// you can also print like this way
const helloPrint = () => "Hello World";

// Constactor class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    console.log(date.getFullYear() - this.year);
  }
}

const car1 = new Car("Toyota", 2009);
const car2 = new Car("BMW", 2017);
const car3 = new Car("Maruti", 2006);

car1.age();
car2.age();
car3.age();

console.log(car1);
console.log(car2);
console.log(car3);

class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  play(status) {
    console.log(`${this.name} is playing ${status}`);
  }
}

const persons1 = new Person("Sakib", 22);
const persons2 = new Person("Rakib", 24);

persons1.play("well");
persons2.play("bad");
// Javscript class lesson done
