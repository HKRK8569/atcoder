import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const tmp = inputs[0].split(" ").map(Number);

const H = tmp[0];
const W = tmp[1];

const total = H * W;

const isEven = total % 2 === 0;

if (H === 1 || W === 1) {
  console.log(1);
} else if (isEven) {
  console.log(total / 2);
} else {
  console.log(Math.ceil(total / 2));
}
