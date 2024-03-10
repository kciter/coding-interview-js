function solution(id_list, report, k) {
  const reportedUser = {} // 신고당한 유저 - 신고 유저 집합을 저장할 오브젝트
  const count = {} // 처리 결과 메일을 받은 유저 - 받은 횟수를 저장할 오브젝트

  // ➊ 신고 기록 순회
  for (const r of report) {
    const [userId, reportedId] = r.split(' ');
    if (reportedUser[reportedId] === undefined) { // ➋ 신고당한 기록이 없다면
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId); // ➌ 신고한 사람의 아이디를 집합에 담아 
                                          // 오브젝트에 연결
  }

  for (const reportedId of Object.keys(reportedUser)) { // ➍ 신고당한 유저별로 신고당한 횟수를 확인
    if (reportedUser[reportedId].size >= k) { // ➎ 정지 기준에 만족하는지 확인
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1
      }
    }
  }

  const answer = [];
  for (let i = 0; i < id_list.length; i++) { // ➏ 각 아이디별 메일을 받은 횟수를 순서대로 정리
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}
