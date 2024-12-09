import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const numbers = inputs[1].split(" ");
const number1 = Number(inputs[0]);
const number2 = Number(numbers[0]);
const number3 = Number(numbers[1]);
const charcter = inputs[2];
const total = number1 + number2 + number3;

console.log(`${total} ${charcter}`);
