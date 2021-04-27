const fs = require("fs");

let slope = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");
slope = slope.split("\n").filter((e) => e);
const mod = slope[0].length;

slope.shift();

const calc = (pos, all = true) => {
  let calcPos = pos;
  let ta = 0;
  slope.forEach((line, index) => {
    if (index % 2 !== 0 || all) {
      if (line[calcPos] === "#") ta += 1;
      calcPos = (calcPos + pos) % mod;
    }
  });
  return ta;
};

let [ta1, ta2, ta3, ta4, ta5] = [
  calc(1),
  calc(3),
  calc(5),
  calc(7),
  calc(1, false),
];

console.log(ta1 * ta2 * ta3 * ta4 * ta5);
