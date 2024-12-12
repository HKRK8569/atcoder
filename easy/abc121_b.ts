import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const tmp = inputs[0].split(" ").map(Number);
const N = tmp[0];
const C = tmp[2];
const numbers = inputs[1].split(" ").map(Number);
let count = 0;

for (let i = 2; i < N + 2; i++) {
  const sourceCode = inputs[i].split(" ").map(Number);
  let total = 0;
  sourceCode.forEach((A, key) => {
    const B = numbers[key];
    total += A * B;
  });
  total += C;
  if (total > 0) {
    count += 1;
  }
}
console.log(count);
