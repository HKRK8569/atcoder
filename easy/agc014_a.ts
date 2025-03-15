import { readFileSync } from "fs";

const inputs: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const [A, B, C] = inputs[0].split(" ").map(Number);

const isIncludedOddNumnber = (A: number, B: number, C: number): boolean => {
  const isOddNumnber = (num: number) => {
    if (num % 2 === 0) {
      return false;
    }
    return true;
  };

  if (isOddNumnber(A) || isOddNumnber(B) || isOddNumnber(C)) {
    return true;
  }
  return false;
};

if (isIncludedOddNumnber(A, B, C)) {
  console.log(0);
} else if (A === B && B === C) {
  console.log(-1);
} else {
  let count = 0;
  let aCookieCount = A;
  let bCookieCount = B;
  let cCookieCount = C;

  while (!isIncludedOddNumnber(aCookieCount, bCookieCount, cCookieCount)) {
    let aGiveCookieCount = aCookieCount / 2;
    let bGiveCookieCount = bCookieCount / 2;
    let cGiveCookieCount = cCookieCount / 2;

    aCookieCount = bGiveCookieCount + cGiveCookieCount;
    bCookieCount = aGiveCookieCount + cGiveCookieCount;
    cCookieCount = aGiveCookieCount + bGiveCookieCount;

    count += 1;
  }
  console.log(count);
}
