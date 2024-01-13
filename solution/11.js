// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = []; // 스택 초기화

  for (const c of s) {
    // ➊ 스택이 비어 있지 않고, 현재 문자와 스택의 맨 위 문자가 같으면
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop(); // ➋ 스택의 맨 위 문자 제거
    } else {
      stack.push(c); // ➌ 스택에 현재 문자 추가
    }
  }

  // ➍ 스택이 비어 있으면 1, 그렇지 않으면 0 반환
  return stack.length === 0 ? 1 : 0;
}
