import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const value = Number(inputs[0])


let isAnswer = false
for(let i = 1; i <= 50000; i++ ){
    if (value === Math.floor(i * 1.08)){
        console.log(i)
        isAnswer = true
        break
    }
}
if (!isAnswer){
    console.log(":(")
}