import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const N = Number(inputs[0]);
const numbers = inputs[1].split(" ").map(Number);
const list: {
  attendanceNumber: number;
  order: number;
}[] = [];

for (let i = 1; i < N + 1; i++) {
  list.push({
    attendanceNumber: numbers[i - 1],
    order: i,
  });
}
let answer = "";
list.sort((a, b) => a.attendanceNumber - b.attendanceNumber);

list.forEach((item, index) => {
  if (index + 1 === N) {
    answer += item.order;
  } else {
    answer += item.order + " ";
  }
});

console.log(answer);
// 時間切れ
// for (let i = 1; i < N + 1; i++) {
//   const index = numbers.indexOf(i) + 1;

//   if (i === N) {
//     answer = answer + index;
//   } else {
//     answer = answer + index + " ";
//   }
// }

// console.log(answer);
