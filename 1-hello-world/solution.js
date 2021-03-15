const visitorName = prompt("What is your name?");
alert(`Hello Dear ${visitorName}`);

let yearOfBirth = Number(prompt("What year were you born?"));

if (Number.isNaN(yearOfBirth)) {
  yearOfBirth = 2021;
}

let myAge = 2021 - yearOfBirth;
alert(`You are ${myAge} years old!`);

if (myAge >= 10 && myAge < 18) {
  confirm("Are you with an adult? (OK for Yes, Cancel for No)");
  let withAdult = confirm("Are you with an adult? (OK for Yes, Cancel for No)");
  if (withAdult === true) {
    alert(
      `Welcome to my super website ${visitorName}. Good, that you are not alone here!`
    );
  } else {
    alert("Go get an adult!");
  }
} else if (myAge < 10) {
  alert(
    `You are too young for this ${visitorName}. Come back when you are older.`
  );
}
if (myAge >= 18) {
  alert(`Welcome to my super website ${visitorName}`);
}
if (myAge === 29) {
  alert(`Welcome to my super website ${visitorName}. We are the same age!`);
}
