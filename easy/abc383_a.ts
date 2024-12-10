import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");
const N = Number(inputs[0]);
let water = 0;
let beforeTime = 0;
for (let i = 0; i < N; i++) {
  const tmp = inputs[i + 1].split(" ");
  const time = Number(tmp[0]);
  const waterAmount = Number(tmp[1]);

  const difference = time - beforeTime;

  water -= difference;

  if (water < 0) {
    water = 0;
  }

  water += waterAmount;
  beforeTime = time;
}

console.log(water);
