const fs = require("fs");
let wrong = 0;
let passwords = fs
  .readFileSync(`${__dirname}/input.txt`, "utf-8")
  .split("\n")
  .filter((e) => e)
  .map((e) => e.split(" "));

passwords.forEach((e) => {
  const [min, max, letter, pw] = [
    parseInt(e[0].split("-")[0]),
    parseInt(e[0].split("-")[1]),
    e[1][0],
    e[2],
  ];
  const amount = pw.split("").filter((pwElement) => pwElement === letter)
    .length;
  if (amount >= min && amount <= max) wrong += 1;
});

console.log(wrong);
