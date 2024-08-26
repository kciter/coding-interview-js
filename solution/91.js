// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const totalSum = 45; // ➊ 0부터 9까지의 숫자의 합: 0 + 1 + 2 + ... + 9 = 45
  const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0); // ➋ 배열에 주어진 숫자들의 합을 계산
  const answer = totalSum - sumOfNumbers; // ➌ 0부터 9까지의 숫자 합에서 주어진 숫자 합을 빼면 없는 숫자들의 합이 됨
  
  return answer; // ➍ 최종 결과 반환
}