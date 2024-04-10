function solution(s) {
  // ➊ 문자열 s를 파싱하여 리스트로 변환합니다.
  const numbers = s.slice(2, -2).split("},{");
  const sorted = numbers.sort((a, b) => a.length - b.length);
  const answer = [];

  // ➋ 각 원소를 순회하면서 이전 원소와 차이가 나는 부분을 구합니다.
  for (const element of sorted) {
    const nums = element.split(",");
    for (const num of nums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
}