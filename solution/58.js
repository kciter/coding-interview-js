function solution(array, commands) {
  const answer = [];
  for (const command of commands) {
    const [i, j, k] = command;
    const sliced = array.slice(i - 1, j); // ➊ i부터 j까지 자르기
    sliced.sort((a, b) => a - b); // ➋ 자른 배열을 정렬하기
    answer.push(sliced[k - 1]); // ➌ k번째 원소 구하기
  }
  return answer;
}
