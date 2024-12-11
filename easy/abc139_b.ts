import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const tmp = inputs[0].split(" ");
const A = Number(tmp[0]);
const B = Number(tmp[1]);

let step = 0;
let tap = 1;

while (tap < B) {
  tap += A - 1;
  step += 1;
}

console.log(step);
