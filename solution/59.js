function compare(a, b) {
  // ➊ 각 수를 문자열로 바꾼 뒤, 조합하여 비교합니다
  // 예. a=3, b=30 -> t1='330', t2='303' t1 > t2
  const t1 = a.toString() + b.toString();
  const t2 = b.toString() + a.toString();
  // t1이 크다면 1, t2가 크다면 -1, 같으면 1
  return t1 > t2 ? -1 : 1;
}

function solution(numbers) {
  // ➋ reverse = True를 이용해 내림차순으로 정렬합니다.
  const sortedNums = numbers.sort(compare);
  // ➌ 각 정렬된 수를 문자열로 이어붙인 뒤, int로 변환한 값을 문자열로 다시 변환하여 반환합니다.
  const answer = sortedNums.join("");
  return Number(answer) === 0 ? "0" : answer;
}
