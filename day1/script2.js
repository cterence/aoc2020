const fs = require("fs");
let numbers = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");
numbers = numbers
  .split("\n")
  .map((num) => parseInt(num))
  .filter((num) => num);

numbers.forEach((num1) => {
  numbers.forEach((num2) => {
    numbers.forEach((num3) => {
      if (num1 + num2 + num3 === 2020) console.log(num1 * num2 * num3);
    });
  });
});
