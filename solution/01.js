function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [1, 1, 2, 2, 3, 4, 5]
console.log(solution([1, 6, 7])); // [1, 6, 7]
