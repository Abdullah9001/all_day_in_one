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
