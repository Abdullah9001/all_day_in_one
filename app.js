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

// Javscript Json Format
const jsonData = `{
  "employees":[
  {"name": "John", "age": 25},
  {"name": "Emily", "age": 30},
  {"name": "Michael", "age": 40},
  {"name": "Sophia", "age": 35}
]}`;

const obj = JSON.parse(jsonData);
console.log(obj.employees);

const jsonData2 = [
  { name: "John", age: 25 },
  { name: "Emily", age: 30 },
  { name: "Michael", age: 40 },
  { name: "Sophia", age: 35 },
];

const json = JSON.stringify(jsonData2);

console.log(json);

// Just try it now
const date = new Date();
const day = date.getDay();

let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);

// done for today

// javascript object

const person3 = {
  name: "Abdullah",
  age: 22,
};

person3.country = "Bangladesh";

delete person3.age;

console.log(person3);

const person4 = {
  fName: "Abdullah",
  lName: " Jubayer ",
  age: 22,
};

let txt = "";
for (let x in person4) {
  txt += person4[x];
}

console.log(txt);

const myObject = {
  name: "Abdullah",
  age: 22,
  cars: [
    { name: " Volbo", model: [" rome", " dilli", " soudi"] },
    { name: " BMW", model: [" wr3", " bc5", " d7"] },
    { name: " Maruti", model: [" s123", " dil6", " soudi10"] },
  ],
};
console.dir(myObject);

let y = "";

for (let i in myObject.cars) {
  y += myObject.cars[i].name;
  for (let j in myObject.cars[i].model) {
    y += myObject.cars[i].model[j];
  }
}

console.log(y);

const a = new String("Bangladesh");
console.dir(a);
