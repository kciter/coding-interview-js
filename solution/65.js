function solution(s) {
  // ❶ 이진 변환 횟수를 저장하는 변수
  let countTransform = 0;
  // ❷ 제거된 모든 0의 개수를 저장하는 변수
  let countZero = 0;

  // ❸ s가 '1'이 아닌 동안 계속 반복
  while (s !== '1') {
    s = s.split(''); // 문자열을 배열로 변환
    // ❹ 이진 변환 횟수를 1 증가
    countTransform += 1;
    // ❺ s에서 '0'의 개수를 세어 countZero에 누적
    countZero += s.filter((c) => c === '0').length;
    // ❻ s에서 '1'의 개수를 세고, 이를 이진수로 변환
    s = s.filter((char) => char === '1').length.toString(2);
  }

  // ❼ 이진 변환 횟수와 제거된 모든 '0'의 개수를 리스트에 담아 반환
  return [countTransform, countZero];
}
