let userNumber = Number(prompt("Enter a number"));
let finalNumber = 0;
let myArr = [];

if (userNumber < 0) {
  alert("Try again!");
} else {
  for (let i = 0; i <= userNumber; i++) {
    myArr.push(i);
    // let finalAnswer = (i += i);

    // let finalNumber = prompt(`Your summated number is ${finalAnswer}`);
  }

  console.log(myArr);

  for (let j = myArr.length - 1; j >= 0; j--) {
    finalNumber += myArr[j];
  }

  console.log(alert(` Your summated number is ${finalNumber}`));
}
