const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "AC") {
      display.value = "";
    } else if (button.innerText === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (button.innerText === "=") {
      display.value = eval(display.value);
    } else {
      display.value += button.innerText;
    }
  });
});