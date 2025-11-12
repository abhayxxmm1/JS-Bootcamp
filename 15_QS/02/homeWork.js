// 🧩 1. Variable Practice (var / let / const)
let a = 10;
var b = 10;
const c = 10;

// 🧠 Tasks:

// 1.	Declare your name, age, and city using let, then print them using console.log().
let name = "abhay";
let age = 21;
let city = "jalgaon";
console.log(`${name} ${age} ${city}`);


// 2.	Try reassigning values of let and const to see the difference.
a = 69;
// c = 69; //! TypeError: Assignment to constant variable.
console.log(`${a} `);

// 3.	Create a constant PI = 3.14 and print area of circle for radius = 5.
const PI = 22/7;
let radius = 5;

//? console.log( area = 2*PI(radius*radius));


// 4.	Use var to declare a variable inside an if block and check if it’s accessible outside.
if (true) {
    var po = 69;
}
console.log(po);    // yes its accesible


// 5.	Do the same with let and observe the error.

if (true) {
    let po = 69;
}
console.log(po);    // yes its accesible




// ⚡ 2. Arrow Function Practice

// 🧠 Tasks:

// 1.	Write an arrow function sayHello that prints “Hello Prasad!”
let hi = ()=>{
    console.log("Hello Prasad ")
}
hi()




// 2.	Write an arrow function add that takes two numbers and returns their sum.
let add = (a, b) => a + b;
console.log(add(121,12324));


// 3.	Write an arrow function square that returns the square of a given number.
let sqr = (a) => a*a;
console.log(sqr(20));

// 4.	Write an arrow function greetUser(name) that returns “Welcome, [name]!”.
let greet = (name)=>`Well cum , ${name}`
console.log(greet("sakshi"));


// 5.	Write an arrow function isEven(num) that returns true if a number is even, else false.
let eve = (num)=> {if (num%2==0) {
    console.log(true);
    
} else {
    console.log(false);
    
    
}
}
eve(2);


// 6.	Write an arrow function getFullName(first, last) that combines first and last name.
let cobine = (n1, n2) => `${n1} ${n2}`;
console.log(cobine("rand","randvi"));

// 7.	Write an arrow function toCelsius(fahrenheit) to convert temperature from F to C.
const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;





// 🧠 3. Combine both (Variables + Arrow Functions)

// 🧠 Tasks:

// 1.	Declare a global variable username = “Prasad”, and an arrow function that prints Hello, [username].
const username = "Prasad";

const gret = () => {
  console.log(`Hello, ${username}`);
};

gret();  // Outputs: Hello, Prasad


// 2.	Write a function calculateBill() that uses const price = 120 and let quantity = 3, then prints the total.
function calculateBill() {
    const price = 120;
    let quantity = 3;
    let total = price * quantity;
    console.log("Total:", total);
  }
  
  calculateBill();  // Outputs: Total: 360
  

// 3.	Write a function checkDiscount() that has a constant DISCOUNT = 0.1 and prints discounted price for a given amount.
function calculateBill() {
    const price = 120;
    let quantity = 3;
    let total = price * quantity;
    console.log("Total:", total);
  }
  
  calculateBill();  // Outputs: Total: 360
  

// 4.	Use arrow function introduce() that prints: “Hi, I’m [yourName] from [yourCity].”

const introduce = () => {
    const yourName = "Prasad";  // Replace with your name
    const yourCity = "Jalgaon"; // Replace with your city
    console.log(`Hi, I'm ${yourName} from ${yourCity}.`);
  };
  
  introduce();  // Outputs: Hi, I'm Prasad from Jalgaon.
  