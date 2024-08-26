// 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]; // ➊ 일치하는 번호의 개수에 따른 순위
  
  let zeroCount = lottos.filter(num => num === 0).length; // ➋ 로또 번호 중 0의 개수
  let matchCount = lottos.filter(num => win_nums.includes(num)).length; // ➌ 당첨 번호와 일치하는 번호의 개수

  // ➍ 최고 순위와 최저 순위를 계산
  const maxRank = rank[matchCount + zeroCount];
  const minRank = rank[matchCount];

  return [maxRank, minRank]; // ➎ 결과 반환
}
