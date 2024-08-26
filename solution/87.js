// 택배 배달과 수거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/150369

function solution(cap, n, deliveries, pickups) {
  let answer = 0;  // ➊ 총 이동 거리를 저장하는 변수
  
  let deliveryLoad = 0;  // ➋ 현재 집에서 배달해야 할 물량을 저장
  let pickupLoad = 0;  // ➋ 현재 집에서 수거해야 할 물량을 저장
  
  // ➌ 마지막 집부터 첫 번째 집까지 역순으로 탐색
  for (let i = n - 1; i >= 0; i--) {
    deliveryLoad += deliveries[i];  // ➍ 현재 집에서 배달해야 할 물량을 누적
    pickupLoad += pickups[i];  // ➍ 현재 집에서 수거해야 할 물량을 누적
    
    // ➎ 트럭이 용량 내에서 배달 및 수거를 처리
    while (deliveryLoad > 0 || pickupLoad > 0) {
      deliveryLoad -= cap;  // ➏ 트럭 용량만큼 배달 물량 처리
      pickupLoad -= cap;  // ➏ 트럭 용량만큼 수거 물량 처리
      answer += (i + 1) * 2;  // ➐ 현재 집까지의 왕복 거리 계산 및 누적
    }
  }
  
  return answer;  // ➑ 총 이동 거리 반환
}
