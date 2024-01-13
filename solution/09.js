function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

// TEST 코드 입니다. 주석을 풀고 실행시켜보세요
// console.log(solution(10)); // 반환값 :  1010
// console.log(solution(27)); // 반환값 :  11011
// console.log(solution(12345)); // 반환값 : 11000000111001
