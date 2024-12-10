import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const characters = inputs[0].split(" ");
const character1 = Number(characters[0]);
const character2 = Number(characters[1]);
const result = character1 * character2;

if (result % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
