const visitorName = prompt("What is your name?");
alert(`Hello Dear ${visitorName}`);

let yearOfBirth = prompt("What year were you born?");

if (yearOfBirth === null) {
  return (yearOfBirth = 2021);
}
