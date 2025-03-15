import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const N = Number(inputs[0])

let answer = 1;
while (answer * 2 <= N) {
  answer *= 2;
}
console.log(answer);
