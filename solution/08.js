function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c == "(") {
      stack.push(c);
    } else if (c == ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

// TEST 코드 입니다. 주석을 풀고 실행시켜보세요
// console.log(solution("(())()")); // 반환값 : true
// console.log(solution("((())()")); // 반환값 : false
