import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const N = Number(inputs[0]);
const numbers = inputs[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

let value = 0;

while (numbers.length !== 0) {
  if (numbers.length === N) {
    value = (numbers[0] + numbers[1]) / 2;
    numbers.shift();
    numbers.shift();
  } else {
    value = (value + numbers[0]) / 2;
    numbers.shift();
  }
}

console.log(value);
