// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const ret = []; // ➊ 빈 배열 생성
  // ➋ 두 수를 선택하는 모든 경우의 수를 반복문으로 구함
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      // ➌ 두 수를 더한 결과를 새로운 배열에 추가
      ret.push(numbers[i] + numbers[j]);
    }
  }
  // ➍ 중복된 값을 제거하고, 오름차순으로 정렬 후 반환
  return [...new Set(ret)].sort((a, b) => a - b);
}

// TEST 코드입니다. 주석을 풀어서 실행시켜 보세요
// console.log(solution([2, 1, 3, 4, 1])); // 반환값 : [2, 3, 4, 5, 6, 7]
// console.log(solution([5, 0, 2, 7])); // 반환값 : [2, 5, 7, 9, 12]
