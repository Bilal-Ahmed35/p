// Handle Number Checker
document.getElementById("checkBtn").addEventListener("click", function () {
  const num = document.getElementById("numberInput").value;
  let result = "";

  if (num === "") {
    result = "⚠️ Please enter a number.";
  } else if (num < 10) {
    result = "✅ The number is less than 10.";
  } else {
    result = "🔹 The number is greater than or equal to 10.";
  }

  const resultBox = document.getElementById("checkResult");
  resultBox.innerText = result;
  resultBox.style.animation = "fadeText 0.6s";

  // Add bounce animation
  this.classList.add("rotate");
  setTimeout(() => this.classList.remove("rotate"), 400);
});

// Handle Multiplication Table Generator
document.getElementById("tableBtn").addEventListener("click", function () {
  const num = document.getElementById("tableInput").value;
  let output = "";

  if (num === "") {
    output = "⚠️ Please enter a number.";
  } else {
    output += `<h3>📘 Multiplication Table of ${num}</h3>`;
    for (let i = 1; i <= 10; i++) {
      output += `${num} × ${i} = ${num * i}<br>`;
    }
  }

  const tableBox = document.getElementById("tableResult");
  tableBox.innerHTML = output;
  tableBox.style.animation = "fadeText 0.8s";

  // Add rotate animation
  this.classList.add("rotate");
  setTimeout(() => this.classList.remove("rotate"), 400);
});
