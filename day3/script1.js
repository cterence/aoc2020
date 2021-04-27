const fs = require("fs");

let slope = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");
slope = slope.split("\n").filter((e) => e);
let pos = 3;
const mod = slope[0].length;
let treeAmount = 0;

slope.shift();
slope.forEach((line) => {
  if (line[pos] === "#") treeAmount += 1;
  pos = (pos + 3) % mod;
});

console.log(treeAmount);
