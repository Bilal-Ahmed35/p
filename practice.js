// ------------------------------
// FUNCTION EXAMPLES
// ------------------------------

// Simple function that adds two numbers
// function add(a, b) {
//   return a + b;
// }
// console.log(`Adding 2+3 = ${add(2, 3)}`);

// Arrow function for subtraction
// const sub = (a, b) => a - b;
// console.log(`Subtracting 5-2 = ${sub(5, 2)}`);

// ------------------------------
// THIS KEYWORD EXAMPLE
// ------------------------------

// ❌ Arrow function does NOT have its own 'this'
// const student = {
//   name: "Alice",
//   age: 20,
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`); // this will be undefined
//   },
// };
// student.greet();

// ✔ Regular function works with 'this'
/*
const std = {
  name: "Bilal",
  age: 20,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
std.greet();
*/

// ------------------------------
// DOM MANIPULATION
// ------------------------------

const btn = document.querySelector("#plus"); // Selecting button with ID 'plus'

// Change text when mouse leaves the button
btn.addEventListener("mouseleave", () => {
  btn.textContent = "Clicked!";
});

// ------------------------------
// REACT EXAMPLE
// ------------------------------
/*
function increment() {
  const [count, setCount] = useState(0); // React hook

  return <button onclick={() => setCount(count + 1)}>{count}</button>;
}
*/

// ------------------------------
// SPREAD OPERATOR
// ------------------------------

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // merging arrays using spread operator
// console.log(arr2);

// ------------------------------
// OPTIONAL CHAINING
// ------------------------------

/*
const user = {
  name: "Bilal",
  company: {
    name: "Beshax",
    address: {
      city: "Karachi",
    },
  },
};

console.log(user?.address?.city); // undefined (correct)
// This line is wrong because 'address' is inside 'company'
console.log(user?.ceo?.name);
*/

// ------------------------------
// ASYNC/AWAIT EXAMPLE
// ------------------------------
/*
async function getData() {
  try {
    const response = await fetch("https://api.com/data"); // API call
    const data = await response.json(); // converting response to JSON
    console.log("Data fetched successfully");
  } catch (error) {
    console.log("Error fetching data:", error); // error handling
  }
}
getData();
*/

// ------------------------------
// MAP FUNCTION EXAMPLE
// ------------------------------

/*
const users = [
  { name: "bial", age: 23 },
  { name: "wasay", age: 22 },
  { name: "murtaza", age: 27 },
];

// Convert names to title case
const nameInTitleCase = users.map((user) => {
  return `${user.name.charAt(0).toUpperCase()}${user.name
    .slice(1)
    .toLowerCase()}`;
});
console.log(nameInTitleCase);
*/

// ------------------------------
// FILTER FUNCTION EXAMPLE
// ------------------------------

/*
const products = [
  { name: "Shirt", inStock: true },
  { name: "Shoes", inStock: false },
  { name: "Hat", inStock: true },
];

// Filtering only NOT in stock items
const inStockProducts = products.filter((product) => !product.inStock);
console.log(inStockProducts);
*/

// ------------------------------
// REDUCE FUNCTION EXAMPLE
// ------------------------------

/*
const cart = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

// Reduce to calculate total price
const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(totalPrice);
*/

// ------------------------------
// SPREAD OPERATOR FOR OBJECTS
// ------------------------------

/*
const user = { name: "Bilal", age: 20 };
const address = { city: "Karachi", country: "Pakistan" };

// Merging two objects
const userWithAddress = { ...user, ...address };
console.log(userWithAddress);
*/

// ------------------------------
// NULLISH COALESCING ?? EXAMPLE
// ------------------------------

/*
const user = { name: "Ali", profile: { email: "ali@example.com" } };

// Optional chaining + default value using ??
const userPhone = user?.name?.profile?.phone ?? "phone not provided";
console.log(userPhone);
*/

// ------------------------------
// TOGGLE LOGIN EXAMPLE
// ------------------------------

/*
let isLoggedIn = false;

// Toggle login status
const toogleLogin = () => {
  isLoggedIn = !isLoggedIn;
  console.log(isLoggedIn ? "User is logged in" : "User is logged out");
};
toogleLogin();
toogleLogin();
*/

// ------------------------------
// BUTTON CLICK EXAMPLE
// ------------------------------

/*
const buttonText = document.querySelector("#btn");

// Change text when clicked
buttonText.addEventListener("click", () => {
  buttonText.textContent = "Clicked!";
});
*/

// ------------------------------
// MAP + TITLE CASE (FRUITS)
// ------------------------------

/*
// Simple map version
const fruits = ["apple", "banana", "mango"];
const inTitleCase = fruits.map((fruit) => {
  return fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
});
console.log(inTitleCase);

// Destructuring version
const titleCaseFruits = fruits.map((fruit) => {
  const [firstLetter, ...rest] = fruit; // destructuring first letter
  return firstLetter.toUpperCase() + rest.join("");
});
console.log(titleCaseFruits);
*/

// ------------------------------
// FETCH API EXAMPLE
// ------------------------------

/*
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json(); // convert to JSON
    console.log("Data fetched successfully", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();
*/

// ------------------------------
// TERNARY + TEMPLATE LITERALS (DISCOUNT)
// ------------------------------

const order = { total: 1200, customer: "Ali" }; // order object
const discountPercent = 10; // discount percent

// Applying discount only if order.total > 1000
const finalPrice =
  order.total > 1000
    ? order.total * (1 - discountPercent / 100) // discount formula
    : order.total; // no discount

// Outputting clean message using template literals
console.log(
  `Actual price was Rs ${order.total}, discount was ${discountPercent}%, and final price is Rs ${finalPrice}.`
);
