function solution(n) {
  return n
    .toString(2) // 2진수로 변환
    .split('') // 문자열에서 배열로 변환
    .filter((c) => c === '1') // 1만 필터링
    .length; // 1의 개수를 반환
}
