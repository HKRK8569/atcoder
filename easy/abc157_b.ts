import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const top = inputs[0].split(" ");
const center = inputs[1].split(" ");
const bottom = inputs[2].split(" ");

const list = [...top, ...center, ...bottom];
const N = Number(inputs[3]);
let bingo = "No";

for (let i = 4; i < N + 4; i++) {
  const number = inputs[i];
  if (list.indexOf(number) !== -1) {
    list[list.indexOf(number)] = "marked";
  }
}

const bingoLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (const line of bingoLines) {
  if (line.every((index) => list[index] === "marked")) {
    bingo = "Yes";
    break;
  }
}

console.log(bingo);
