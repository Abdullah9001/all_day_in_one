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

const person5 = {
  firstName: "Abdullah",
  lastName: "Jubayer",
  id: 3276538,
  fullNames: function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  },
};

console.log(person5.fullNames());

const person6 = {
  name: "Abdullah ",
  age: 22,
  city: " Bangladeash",
};

document.getElementById("demo").innerHTML =
  person6.name + " is " + person6.age + " years old";

let text = "";
for (let f in person6) {
  text += person6[f];
}

document.getElementById("demo2").innerHTML = text;

const person7 = {
  name: "Abdullah",
  age: 22,
  city: "Bangladeash",
};

const objToArray = Object.values(person7);

let textt = "";
for (let a of objToArray) {
  textt += a;
}
document.getElementById("demo3").innerHTML = objToArray;
document.getElementById("demo4").innerHTML = textt;

let stringify = JSON.stringify(person7);
console.log(stringify);

const person8 = {
  name: "Abdullah",
  age: 22,
  language: "en",
  get fullnamess() {
    return this.name + " " + this.age;
  },
};

console.log(person8.fullnamess);

const person9 = {
  fNames: "Abdullah",
  lNames: "Jubayer",
  age: 22,
  language: "",
  set lang(a) {
    this.language = a;
  },
};
Object.defineProperty(person9, "fullNames", {
  get: function () {
    return this.fNames + " " + this.lNames;
  },
});

person9.lang = "English";

console.log(person9);
console.log(person9.fullNames);

// constractor object
function BioData(first, last, age, city) {
  (this.fName = first),
    (this.lName = last),
    (this.age = age),
    (this.city = city),
    (this.fullName = function () {
      return this.fName + " " + this.lName;
    });
}

const aj = new BioData("Abdullah", "Jubayer", 22, "Bngladesh");

console.log(aj);
console.log(aj.fullName());

function BioData2(name, age, city) {
  (this.name = name), (this.age = age), (this.city = city);
  this.address = function () {
    return (
      this.name + " is " + this.age + " years old and he lives in " + this.city
    );
  };
}
BioData2.prototype.country = "Bandgladesh";
console.log(BioData2());

const ka = new BioData2("Kawsar", 24, "Sirajganj.");
console.log(ka);
console.log(ka.address());

const number1 = [1, 2, 3, 4, 5, 6];
for (n of number1) {
  console.log(n);
}

const number2 = {
  one: 1,
  two: 2,
  three: 3,
};

for (n in number2) {
  console.log(n);
}

console.dir(number1);
console.dir(number2);

const myNumbers = {};
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};

for (let num of myNumbers) {
  console.log(num);
}

const letter = new Set(["a", "b", "c", "d"]);
let texts = "";
letter.forEach(function (value) {
  texts += value;
});
console.log(texts);

const leeterItterator = letter.values();
for (let d of leeterItterator) {
  console.log(d);
}

// just function
function func(a, b) {
  return a + b;
}
console.log(func(984, 598));

// function expresson
const func1 = function (a, b) {
  return a + b;
};
console.log(func1(5, 6));

// function lekhar agei function declearation kora jay
func2(8, 100);

function func2(a, b) {
  console.log(a * b);
}

// expressonal function e ta kora jay na

var func3 = function (a, b) {
  return a / b;
};
console.log(func3(80, 10));

// you can write function this way
(function func4(a, b) {
  console.log(a - b);
})(20, 15);
