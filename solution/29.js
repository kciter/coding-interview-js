function solution(enroll, referral, seller, amount) {
  // ➊ parent 딕셔너리 key는 enroll의 노드, value는 referral의 노드로 구성됨
  let parent = {};
  for(let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  // ➋ total 오브젝트 생성 및 초기화
  let total = {};
  for(let name of enroll) {
    total[name] = 0;
  }

  // ➌ seller 배열과 amount 배열을 이용하여 이익 분배
  for(let i = 0; i < seller.length; i++) {
    // ➍ 판매자가 판매한 총 금액 계산
    let money = amount[i] * 100;
    let cur_name = seller[i];

    // ➎ 판매자부터 차례대로 상위 노드로 이동하며 이익 분배
    while(money > 0 && cur_name != "-") {
      // ➏ 현재 판매자가 받을 금액 계산(10%를 제외한 금액)
      total[cur_name] += money - Math.floor(money / 10);
      cur_name = parent[cur_name];

      // ➐ 10%를 제외한 금액 계산
      money = Math.floor(money / 10);
    }
  }

  // ➑ enroll 리스트의 모든 노드에 대해 해당하는 이익을 리스트로 반환
  return enroll.map(name => total[name]);
}
