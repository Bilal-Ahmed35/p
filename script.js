// const button = document.getElementById("btn1");
// let count = 0;

// button.addEventListener("click", () => {
//   count++;
//   button.textContent = `Clicked ${count} times`;
// });

const button = document.getElementById("btn1");

button.addEventListener("click", () => {
  // Add the bounce animation class
  button.classList.add("bounce");

  // Remove it after animation ends (so it can be reused)
  button.addEventListener(
    "animationend",
    () => {
      button.classList.remove("bounce");
    },
    { once: true }
  );
});
