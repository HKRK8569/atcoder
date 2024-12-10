import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const numbers = inputs[0].split("");
let count = 0;
numbers.forEach((number: string) => {
  if (number === "1") {
    count += 1;
  }
});

console.log(count);
