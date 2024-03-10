function solution(participant, completion) {
  // ➊ 해시 테이블 생성
  const dic = {};

  // ➋ 참가자들의 이름을 해시 테이블에 추가
  for (const p of participant) {
    if (dic[p]) {
      dic[p] += 1;
    } else {
      dic[p] = 1;
    }
  }

  // ➌ 완주한 선수들의 이름을 키로 하는 값을 1씩 감소
  for (const c of completion) {
    dic[c] -= 1;
  }

  // ➍ 해시 테이블에 남아 있는 선수가 완주하지 못한 선수
  for (const key in dic) {
    if (dic[key] > 0) {
      return key;
    }
  }
}
