import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const N = Number(inputs[0]);

const numbers = inputs[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

const answer = numbers[N / 2] - numbers[N / 2 - 1];
console.log(answer);
