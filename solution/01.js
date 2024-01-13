function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

// TEST 코드 입니다. 주석을 풀고 실행시켜 보세요.
// console.log(solution([1, -5, 2, 4, 3])); // 반환값 : [-5, 1, 2, 3, 4]
// console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 반환값 : [1, 1, 2, 2, 3, 4, 5]
// console.log(solution([1, 6, 7])); // 반환값 : [1, 6, 7]

