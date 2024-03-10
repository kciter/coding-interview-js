function solution(genres, plays) {
  let answer = [];
  const genresObj = {};
  const playObj = {};

  // ➊ 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
  for (let i = 0; i < genres.length; i++) {
    genre = genres[i];
    play = plays[i];

    if (!(genre in genresObj)) {
      genresObj[genre] = [];
      playObj[genre] = 0;
    }

    genresObj[genre].push([i, play]);
    playObj[genre] += play;
  }

  // ➋ 총 재생 횟수가 많은 장르순으로 정렬
  sortedGenres = Object.keys(playObj).sort((a, b) => {
    return playObj[b] - playObj[a];
  });

  // ➌ 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
  for (const genre of sortedGenres) {
    sortedSongs = genresObj[genre].sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
    });

    answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
  }

  return answer;
}
