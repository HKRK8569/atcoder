import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const temp = inputs[0].split(" ");

const number = Number(`${temp[0]}${temp[1]}`);

let result = "No";

if (Number.isInteger(Math.sqrt(number))) {
  result = "Yes";
}

console.log(result);
