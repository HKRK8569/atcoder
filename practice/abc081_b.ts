import { readFileSync } from "fs";

const isNumbersAllEven = (numbers: number[]): boolean => {
  return numbers.every((number) => {
    return number % 2 === 0;
  });
};

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");
const N = Number(inputs[0]);

let count = 0;

const numbers = inputs[1].split(" ").map((number) => {
  return Number(number);
});

while (isNumbersAllEven(numbers)) {
  count += 1;

  for (let i = 0; i < N; i++) {
    numbers[i] = numbers[i] / 2;
  }
}

console.log(count);
