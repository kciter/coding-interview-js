function solution(n, words) {
  usedWords = new Set(); // ➊ 이미 사용한 단어를 저장하는 set
  prevWord = words[0][0]; // ➋ 이전 단어의 마지막 글자
  for (i = 0; i < words.length; i++) {
    word = words[i];
    // ➌ 이미 사용한 단어거나 첫 글자가 이전 단어와 일치하지 않으면
    if (usedWords.has(word) || word[0] != prevWord) {
      // ➍ 탈락하는 사람의 번호와 차례를 반환
      return [i % n + 1, Math.floor(i / n) + 1];
    }
    usedWords.add(word); // ➎ 사용한 단어로 추가
    prevWord = word.slice(-1); // ➏ 이전 단어의 마지막 글자 업데이트
  }
  return [0, 0]; // ➐ 모두 통과했을 경우 반환값
}
