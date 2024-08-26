// 두 큐 합 같게 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
  const sum1 = queue1.reduce((acc, cur) => acc + cur, 0); // ➊ queue1의 합
  const sum2 = queue2.reduce((acc, cur) => acc + cur, 0); // ➊ queue2의 합
  const totalSum = sum1 + sum2; // 두 큐의 총합
  
  if (totalSum % 2 !== 0) return -1; // ➋ 총합이 홀수이면 불가능

  const targetSum = totalSum / 2; // 두 큐의 목표 합
  const combinedQueue = [...queue1, ...queue2]; // ➌ 두 큐를 결합
  
  let currentSum = sum1;
  let left = 0;
  let right = queue1.length;
  const maxMoves = queue1.length * 3; // ➍ 최대 이동 횟수
  
  for (let moves = 0; moves < maxMoves; moves++) {
    if (currentSum === targetSum) return moves; // ➎ 두 큐의 합이 같아지면 이동 횟수 반환

    if (currentSum > targetSum) {
      currentSum -= combinedQueue[left++]; // ➏ left 포인터 이동: 큐에서 원소 제거
    } else {
      currentSum += combinedQueue[right++ % combinedQueue.length]; // ➐ right 포인터 이동: 큐에 원소 추가
    }
  }

  return -1; // ➑ 모든 경우를 시도했으나 두 큐의 합이 같아지지 않으면 -1 반환
}
