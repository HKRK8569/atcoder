import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const [K, N] = inputs[0].split(" ").map(Number);
const distances = inputs[1].split(" ").map(Number)

let maxGap = 0;
for (let i = 0; i < N - 1; i++) {
    maxGap = Math.max(maxGap, distances[i + 1] - distances[i]);
}

maxGap = Math.max(maxGap, K - (distances[N - 1] -distances[0]));

console.log(K - maxGap);

/*
memo
一番家間の距離が遠いくみあわせを通らないようにする
*/