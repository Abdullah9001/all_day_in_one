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
