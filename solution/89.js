// 110 옮기기
// https://school.programmers.co.kr/learn/courses/30/lessons/77886

function solution(s) {
  const answer = []; // ➊ 최종 결과를 저장할 배열
  
  // ➋ 주어진 각 문자열에 대해 처리
  for (const str of s) {
    const stack = []; // ➌ 110 패턴을 찾기 위한 스택
    let count = 0; // ➍ '110' 패턴의 개수를 카운트

    // ➎ 문자열의 각 문자를 순회하며 '110' 패턴을 찾음
    for (const char of str) {
      stack.push(char); // ➏ 현재 문자를 스택에 추가
      // ➐ 스택의 마지막 3자리가 '110'인지 확인
      if (stack.length >= 3 && 
          stack[stack.length - 3] === '1' && 
          stack[stack.length - 2] === '1' && 
          stack[stack.length - 1] === '0') {
        count += 1; // ➑ '110' 패턴 발견 시 카운트 증가
        stack.splice(-3); // ➒ 스택에서 '110' 패턴 제거
      }
    }

    // ➓ 스택에서 마지막으로 등장한 '0'의 위치를 찾음
    let idx = stack.lastIndexOf('0');
    
    if (idx === -1) {
      // ⓫ 스택에 '0'이 없는 경우, '110' 패턴을 앞에 추가
      answer.push('110'.repeat(count) + stack.join(''));
    } else {
      // ⓬ 마지막 '0' 뒤에 '110' 패턴을 삽입
      stack.splice(idx + 1, 0, '110'.repeat(count));
      answer.push(stack.join('')); // 최종 결과를 배열에 추가
    }
  }

  return answer; // ⓭ 모든 문자열에 대해 처리한 결과를 반환
}
