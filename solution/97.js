// 숫자 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A, B) {
  let answer = 0;  // ➊ 승리 횟수를 저장하는 변수
  let bIdx = 0;  // ➋ B팀의 인덱스를 저장하는 변수
  A.sort((a, b) => b - a);  // ➌ A 팀의 숫자를 오름차순으로 정렬
  B.sort((a, b) => b - a);  // ➍ B 팀의 숫자를 오름차순으로 정렬

  // ➎ A팀의 모든 카드에 대해 B팀의 카드를 비교
  for (let aIdx = 0; aIdx < A.length; aIdx++) {
    // ➏ B팀의 카드가 A팀의 카드보다 크다면 승리
    if (B[bIdx] > A[aIdx]) {
      answer += 1;  // ➐ 승리 횟수 증가
      bIdx += 1;  // B팀 인덱스 증가
    }
    // ➑ B팀 인덱스가 A팀 카드보다 큰 카드에서만 증가하므로, B팀이 더 많은 카드를 쓸 수 있음
  }

  return answer;  // ➒ 승리 횟수 반환
}
