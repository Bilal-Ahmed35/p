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

const user = {
  name: "Bilal",
  company: {
    name: "Beshax",
    address: {
      city: "Karachi",
    },
  },
};
console.log(user?.company?.address?.city);
console.log(user?.ceo?.name);
