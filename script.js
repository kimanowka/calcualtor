const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const point = document.querySelector(".point");

let firstNumber = 0;
let secondNumber = 0;
let operation = "";
let res = 0;

btn.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
      input.value += e.target.innerHTML;
    }
    if (e.target.classList.contains("delete")) {
      if (e.target.innerHTML === "CE") {
        input.value = "";
      } else if ((e.target.innerHTML = "C")) {
        input.value = +input.value.slice(0, -1);
      }
    }
    if (e.target.classList.contains("operation")) {
      firstNumber = input.value;
      operation = e.target.innerHTML;
      input.value = "";
      isNumber = "second";
    }
  })
);

result.addEventListener("click", (e) => {
  secondNumber = input.value;

  switch (operation) {
    case "+":
      input.value = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      input.value = Number(firstNumber) - Number(secondNumber);
      break;
    case "/":
      res = Number(firstNumber) / Number(secondNumber);
      input.value = res.toFixed(8);
      break;
    case "*":
      input.value = Number(firstNumber) * Number(secondNumber);
      break;
    case "%":
      const ratio = Number(secondNumber) / 100;
      res = ratio * Number(firstNumber);
      input.value = res.toFixed(8);
      break;
    case "**":
      input.value = Math.pow(Number(firstNumber), Number(secondNumber));
  }
});

document.addEventListener("keydown", (e) => {
  if (
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "0"
  ) {
    input.value += e.key;
  }
});
