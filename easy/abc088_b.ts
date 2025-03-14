import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const numbers = inputs[1].split(" ").map(Number)

let alicePoint = 0
let bobPoint = 0

let count = 0
while(numbers.length !== 0){
    const maxNum = Math.max(...numbers)

    if (count % 2 === 0){
        alicePoint += maxNum
    }else {
        bobPoint += maxNum
    }
    count+= 1
    const numberIndex = numbers.indexOf(maxNum)
    numbers.splice(numberIndex,1)
}

console.log(alicePoint - bobPoint)
