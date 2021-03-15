let myOperator = prompt(
  "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
);

if (myOperator === "+") {
  let operand1 = Number(prompt("Type a first number"));
  let operand2 = Number(prompt("Type a second number"));
  alert(`The total is ${operand1 + operand2}`);
} else if (myOperator === "-") {
  let operand1 = Number(prompt("Type a first number"));
  let operand2 = Number(prompt("Type a second number"));
  alert(`The total is ${operand1 - operand2}`);
} else if (myOperator === "*") {
  let operand1 = Number(prompt("Type a first number"));
  let operand2 = Number(prompt("Type a second number"));
  alert(`The total is ${operand1 * operand2}`);
} else if (myOperator === "/") {
  let operand1 = Number(prompt("Type a first number"));
  let operand2 = Number(prompt("Type a second number"));
  alert(`The total is ${operand1 / operand2}`);
} else myOperator === "exit";
alert("Goodbye!");
