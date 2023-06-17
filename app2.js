console.log("Start another app file from here");

const number = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8, 9];
const numbers = [1, 2, 3, 4, 5];
console.dir(number);
console.log(number.at());
// console.log(number.concat(numbers));
console.log(number.pop());
console.log(number.push(10));
console.log(number.reverse());
console.log(number.shift());
console.log(number.slice(1, 5));
console.log(number.sort());
console.log(number.length);
console.log(number.unshift(9));

// aonothe paknami
console.log(numbers.pop());
console.log(numbers.push(10));
console.log(numbers.reverse());
console.log(numbers.shift());
console.log(numbers.slice(1, 3));
console.log(numbers.sort());
console.log(numbers.length);

//another paknami shuru
console.log(numbers.unshift(9));

let counter = 0;

function add() {
  counter += 1;
}
add();
add();
add();
console.log(counter);

function add2() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  plus();
  plus();
  plus();
  return counter;
}
console.log(add2());

function temporary() {
  let counter = 0;
  return function plus() {
    counter += 1;
  };
}

const add3 = temporary();
console.log(add3());
