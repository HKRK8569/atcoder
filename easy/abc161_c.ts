import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");
// 数値が大きいのでbigintで値をもつ
const [N, K] = inputs[0].split(" ").map(BigInt);

const result1 = N % K;
const result2 = K - result1;

console.log(result1 < result2 ? Number(result1) : Number(result2));
