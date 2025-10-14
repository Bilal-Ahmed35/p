const button = document.getElementById("btn1");
let count = 0;

button.addEventListener("click", () => {
  count++;
  button.textContent = `Clicked ${count} times`;
});
