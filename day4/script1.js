const fs = require("fs");

let passports = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");
passports = passports.split(/\n{2,}/g);
// .map((e) => e.split(/[\ \n]/));

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let valid = passports.length;
passports.forEach((p) => {
  requiredFields.some((f) => {
    const test = p.indexOf(f) === -1;
    valid -= test ? 1 : 0;
    return test;
  });
});

console.log(valid);
