// 불량 사용자
// https://school.programmers.co.kr/learn/courses/30/lessons/64064

function solution(user_id, banned_id) {
  const possibleSets = new Set(); // ➊ 가능한 모든 경우의 수를 저장할 Set

  // ➋ banned_id 패턴과 일치하는 user_id를 찾는 함수
  function isMatch(user, ban) {
    if (user.length !== ban.length) return false; // 길이가 다르면 매칭 불가
    for (let i = 0; i < user.length; i++) {
      if (ban[i] !== '*' && user[i] !== ban[i]) return false; // 문자가 다르면 매칭 불가
    }
    return true; // 모든 조건을 만족하면 매칭 성공
  }

  // ➌ 모든 가능한 조합을 찾는 재귀 함수
  function findCombinations(currentIndex, selectedUsers) {
    if (currentIndex === banned_id.length) {
      const sortedSelected = [...selectedUsers].sort().join(','); // 선택된 아이디들을 정렬하여 문자열로 변환
      possibleSets.add(sortedSelected); // Set에 추가하여 중복을 방지
      return;
    }

    // ➍ 현재 banned_id와 매칭되는 user_id들을 순회
    user_id.forEach(user => {
      if (!selectedUsers.includes(user) && isMatch(user, banned_id[currentIndex])) {
        selectedUsers.push(user);
        findCombinations(currentIndex + 1, selectedUsers); // 다음 banned_id로 재귀 호출
        selectedUsers.pop(); // 백트래킹을 위해 pop
      }
    });
  }

  // ➎ 조합 찾기 시작
  findCombinations(0, []);

  return possibleSets.size; // ➏ 가능한 경우의 수 반환
}
