const fs = require("fs");
let numbers = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");
numbers = numbers.split("\n");
numbers = numbers.map((num) => parseInt(num));
const numbersTemp = numbers;
numbersTemp.shift();
numbers.forEach((num1) => {
  numbersTemp.forEach((num2) => {
    if (num1 + num2 === 2020) console.log(num1 * num2);
  });
});
