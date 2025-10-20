// Number Checker
document.getElementById("checkBtn").addEventListener("click", function () {
  const num = document.getElementById("numberInput").value;
  const resultBox = document.getElementById("checkResult");
  let result = "";

  if (num === "") {
    result = "⚠️ Please enter a number.";
  } else if (num < 10) {
    result = `✅ ${num} is less than 10.`;
  } else {
    result = `🔹 ${num} is greater than or equal to 10.`;
  }

  resultBox.innerText = result;
  resultBox.style.animation = "fadeText 0.6s";
  this.classList.add("rotate");
  setTimeout(() => this.classList.remove("rotate"), 400);
});

// Even/Odd + Square/Cube Analyzer
document.getElementById("extraBtn").addEventListener("click", function () {
  const num = document.getElementById("numberInput").value;
  const extraBox = document.getElementById("extraResult");

  if (num === "") {
    extraBox.innerText = "⚠️ Please enter a number first above!";
    return;
  }

  const evenOdd = num % 2 === 0 ? "Even" : "Odd";
  const square = num * num;
  const cube = num * num * num;

  extraBox.innerHTML = `
    ✳️ ${num} is <b>${evenOdd}</b><br>
    ⬛ Square: <b>${square}</b><br>
    🧊 Cube: <b>${cube}</b>
  `;

  this.classList.add("rotate");
  setTimeout(() => this.classList.remove("rotate"), 400);
});

// Multiplication Table Generator
document.getElementById("tableBtn").addEventListener("click", function () {
  const num = document.getElementById("tableInput").value;
  const tableBox = document.getElementById("tableResult");
  let output = "";

  if (num === "") {
    output = "⚠️ Please enter a number.";
  } else {
    output += `<h3>📘 Multiplication Table of ${num}</h3>`;
    for (let i = 1; i <= 10; i++) {
      output += `${num} × ${i} = ${num * i}<br>`;
    }
  }

  tableBox.innerHTML = output;
  tableBox.style.animation = "fadeText 0.8s";
  this.classList.add("rotate");
  setTimeout(() => this.classList.remove("rotate"), 400);
});

// Reset Button
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("numberInput").value = "";
  document.getElementById("tableInput").value = "";
  document.getElementById("checkResult").innerHTML = "";
  document.getElementById("extraResult").innerHTML = "";
  document.getElementById("tableResult").innerHTML = "";

  this.classList.add("rotate");
  setTimeout(() => this.classList.remove("rotate"), 400);
});
