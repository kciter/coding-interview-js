function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

// TEST 코드 입니다. 주석을 풀고 실행시켜 보세요.
// console.log(solution([1, -5, 2, 4, 3]));
// console.log(solution([2, 1, 1, 3, 2, 5, 4]));
// console.log(solution([1, 6, 7]));

