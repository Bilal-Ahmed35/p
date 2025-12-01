// function add(a, b) {
//   return a + b;
// }
// console.log(`Adding 2+3 = ${add(2, 3)}`);

// const sub = (a, b) => a - b;
// console.log(`Subtracting 5-2 = ${sub(5, 2)}`);

// const student = {
//   name: "Alice",
//   age: 20,
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// student.greet();

// const std = {
//   name: "Bilal",
//   age: 20,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// std.greet();

const btn = document.querySelector("#plus");

btn.addEventListener("mouseleave", () => {
  btn.textContent = "Clicked!";
});

// function increment() {
//   const [count, setCount] = useState(0);

//   return <button onclick={() => setCount(count + 1)}>{count}</button>;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2);

// const user = {
//   name: "Bilal",
//   company: {
//     name: "Beshax",
//     address: {
//       city: "Karachi",
//     },
//   },
// };
// console.log(user?.address?.city);
// console.log(user?.ceo?.name);

// async function getData() {
//   try {
//     const response = await fetch("https://api.com/data");
//     const data = await response.json();
//     console.log("Data fetched successfully");
//   } catch (error) {
//     console.log("Error fetching data:", error);
//   }
// }
// getData();

// const users = [
//   { name: "bial", age: 23 },
//   { name: "wasay", age: 22 },
//   { name: "murtaza", age: 27 },
// ];

// const nameInTitleCase = users.map((user) => {
//   return `${user.name.charAt(0).toUpperCase()}${user.name
//     .slice(1)
//     .toLowerCase()}`;
// });
// console.log(nameInTitleCase);

// const products = [
//   { name: "Shirt", inStock: true },
//   { name: "Shoes", inStock: false },
//   { name: "Hat", inStock: true },
// ];

// const inStockProducts = products.filter((product) => !product.inStock);
// console.log(inStockProducts);

// const cart = [
//   { name: "Shirt", price: 20, quantity: 2 },
//   { name: "Shoes", price: 50, quantity: 1 },
//   { name: "Hat", price: 10, quantity: 3 },
// ];

// const totalPrice = cart.reduce((total, item) => {
//   return total + item.price * item.quantity;
// }, 0);
// console.log(totalPrice);

// const user = { name: "Bilal", age: 20 };
// const address = { city: "Karachi", country: "Pakistan" };

// const userWithAddress = { ...user, ...address };
// console.log(userWithAddress);

// const user = { name: "Ali", profile: { email: "ali@example.com" } };

// const userPhone = user?.name?.profile?.phone ?? "phone not provided";
// console.log(userPhone);

// let isLoggedIn = false;
// const toogleLogin = () => {
//   isLoggedIn = !isLoggedIn;
//   console.log(isLoggedIn ? "User is logged in" : "User is logged out");
// };
// toogleLogin();
// toogleLogin();

// const buttonText = document.querySelector("#btn");
// buttonText.addEventListener("click", () => {
//   buttonText.textContent = "Clicked!";
// });

// const fruits = ["apple", "banana", "mango"];
// const inTitleCase = fruits.map((fruit) => {
//   return fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
// });
// console.log(inTitleCase);

const fruits = ["apple", "banana", "mango"];

const titleCaseFruits = fruits.map((fruit) => {
  const [firstLetter, ...rest] = fruit;
  return firstLetter.toUpperCase() + rest.join("");
});

console.log(titleCaseFruits);
