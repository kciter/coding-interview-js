// k진수에서 소수 개수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  // ➊ n을 k진수로 변환
  const kBase = n.toString(k);

  // ➋ 0을 기준으로 문자열 분할하여 숫자 배열로 변환
  const candidates = kBase.split('0').filter(x => x !== '').map(Number);

  // ➌ 소수 판별 함수
  function isPrime(num) {
    if (num <= 1) return false; // 1 이하는 소수가 아님
    if (num === 2) return true; // 2는 소수
    if (num % 2 === 0) return false; // 2를 제외한 짝수는 소수가 아님

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false; // 나누어떨어지면 소수가 아님
    }
    
    return true; // 위 조건을 통과하면 소수
  }

  // ➍ 소수인 숫자들의 개수를 셈
  const answer = candidates.filter(isPrime).length;

  return answer; // ➎ 최종 결과 반환
}