import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const N = Number(inputs[0])
const K = Number(inputs[1])
const X = inputs[2].split(' ').map(Number);

let totalDistance = 0;
for (let i = 0; i < N; i++) {
  totalDistance += Math.min(2 * X[i], 2 * (K - X[i]));

}

console.log(totalDistance);


