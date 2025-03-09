import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const input1 = inputs[0].split(" ")
const input2 =  inputs[1]

const partNum = Number(input1[0])
const A = Number(input1[1])
const B = Number(input1[2])

const limit = A + B

let passNum = 0
let aboroadRank = 1
for (let i = 0; i < partNum; i++){
   const partType = input2[i]
   if (partType === "a"){
    if (passNum < limit){
        passNum += 1
        console.log("Yes")
    }else{
        console.log("No")
    }
   }else if (partType === "b"){
        if (passNum < limit && aboroadRank <= B){
            passNum += 1
            console.log("Yes")
        }else{
            console.log("No")
        }
        aboroadRank+= 1
   }else{
    console.log("No")
   }
}
