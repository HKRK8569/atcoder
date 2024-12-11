import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const coordinates = inputs[1].split(" ");

let answer = Infinity;

for (let i = 1; i <= 100; i++) {
  let downLife = 0;
  coordinates.forEach((coordinate) => {
    downLife += (Number(coordinate) - i) ** 2;
  });
  if (downLife < answer) {
    answer = downLife;
  }
}

console.log(answer);
