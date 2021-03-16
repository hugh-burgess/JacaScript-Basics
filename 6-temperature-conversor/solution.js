let myTempChoice = prompt(
  "Pick a temperature source type, c for Celsius or f for Fahrenheit.."
);
let tempCelsius = null;
let tempFahrenheit = null;

if (myTempChoice === "c" || myTempChoice === "C") {
  let tempCelsius = Number(
    prompt("Choose a temperature to be changed to the other source type..")
  );
  alert(`The answer in Fahrenheit is ${tempCelsius * (9 / 5) + 32}`);
} else if (myTempChoice === "f" || myTempChoice === "F") {
  let tempFahrenheit = Number(
    prompt("Choose a temperature to be changed to the other source type..")
  );
  alert(
    `The answer in Celsius is ${(tempCelsius =
      (tempFahrenheit - 32) * (5 / 9))}`
  );
} else {
  while (
    myTempChoice === "" ||
    myTempChoice === null ||
    myTempChoice === number
  ) {
    prompt(
      "Pick a temperature source type, c for Celsius or f for Fahrenheit.."
    );
  }
}
