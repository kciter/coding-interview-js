function solution(arr) {
  const uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => a - b);
  return uniqueArr;
}

// TEST 코드 입니다. 주석을 풀고 실행시켜 보세요
// console.log(solution([4, 2, 2, 1, 3, 4])) // 반환값 : [4, 3, 2, 1]
// console.log(solution([2, 1, 1, 3, 2, 5, 4])) // 반환값 : [5, 4, 3, 2, 1]

