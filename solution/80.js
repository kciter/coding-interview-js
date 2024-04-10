function solution(amount) {
  const denominations = [1, 10, 50, 100];
  denominations.sort((a, b) => b - a); // ❶ 화폐 단위를 큰 순서대로 정렬

  const change = []; // ❷ 거스름돈을 담을 리스트

  for (const coin of denominations) {
    while (amount >= coin) { // ❸ 해당 화폐 단위로 거스름돈을 계속 나눠줌
      change.push(coin); // ❹ 거스름돈 리스트 업데이트
      amount -= coin; // ❺ 정산이 완료된 거스름돈 뺌
    }
  }

  return change; // ❻ 거스름돈 리스트 반환
}

console.log(solution(123)) // [100, 10, 10, 1, 1, 1]
console.log(solution(350)) // [100, 100, 100, 50]
