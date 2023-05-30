const string = "Hello, my name is John Doe.";

const nameRegex = string.search(/john/i);

console.log(nameRegex);

try {
  console.log("Hello World");
} catch (err) {
  console.log(err);
}
