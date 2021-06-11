// function greetPerson(name) {
//   let greet;
//   if (name === "haswanth") {
//     greet = "Hello Haswanth";
//   } else {
//     greet = "Hello Royal";
//   }
//   console.log(greet);
// }

// greetPerson("has");

// var a = 1;
// var b = 2;
// if (a === 1) {
//   var a = 10;
//   let b = 20;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// const PI = 3.14;

// const MAX_SIZe = 100;
// let a = 5;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a - b;

// var getRegularvalur = function () {
//   return 70;
// };
// console.log(getRegularvalur());

// const getArrowvalue = (m) => {
//   return 80 * m;
// };
// console.log(getArrowvalue(5));

// console.log(typeof getArrowvalue);

// var employee = {
//   id: 20,
//   greet: function () {
//     var self = this;
//     setTimeout(() => {
//       console.log(this.id);
//     }, 1000);
//   },
// };

//Default Params and arguments

// let getValue = function (value = 10, bonus = value * 0.1) {
//   console.log(value + bonus);
//   console.log(arguments.length);
// };

// getValue(10, 15);
// getValue(20, 30);
// getValue();
// getValue(5);
// getValue(20);
// getValue(undefined, 30);

// employee.greet();

// Rest Operator
// let displayColors = function (message, ...colors) {
//   console.log(colors);
//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let message = "list of colors";

// displayColors(message, "red");
// displayColors(message, "red", "blue");
// displayColors(message, "red", "blue", "green");

//Spread Operator
// let displayColors = function (message, ...colors) {
//   console.log(message);
//   console.log(colors);
//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let message = "list of colors";

// let colorArray = ["orange", "yellow", "indigo"];

// displayColors(message, ...colorArray);

// displayColors(message, "red");
// displayColors(message, "red", "blue");
// displayColors(message, "red", "blue", "green");

// objects

let firstname = "Haswanth";
let lastname = "Royal";

let person = {
  firstname: firstname,
  lastname: lastname,
};

console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname, lastname, age) {
  let fullname = firstname + " " + lastname;
  return {
    firstname,
    lastname,
    fullname,
    isSenior: function () {
      return age > 60;
    },
  };
}

let p = createPerson("Haswanth", "royal", 90);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
