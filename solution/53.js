function solution(board, aloc, bloc) {
  // ➊ 게임판의 행과 열의 개수를 저장합니다.
  const ROW = board.length;
  const COL = board[0].length;

  // ➋ 이동할 수 있는 방향을 저장합니다. 상, 우, 하, 좌 순서로 저장되어 있습니다.
  const DR = [-1, 0, 1, 0];
  const DC = [0, 1, 0, -1];

  // ➌ 주어진 위치가 유효한 위치인지 확인하는 함수입니다.
  function isValidPos(r, c) {
    return 0 <= r && r < ROW && 0 <= c && c < COL;
  }

  // ➍ 재귀적으로 호출되는 함수입니다.
  function recursiveFunc(alphaPos, betaPos, visited, step) {
    // ➎ 현재 플레이어의 위치와 이동 가능한지 여부,
    // 상대 플레이어가 이긴 경우를 저장하는 변수들입니다.
    const [r, c] = step % 2 === 0 ? alphaPos : betaPos;
    let canMove = false;
    let isOpponentWinner = true;

    // ➏ 이긴 경우와 지는 경우를 저장하는 리스트입니다.
    const winSteps = [];
    const loseSteps = [];

    // ➐ 현재 위치에서 이동할 수 있는 모든 방향으로 이동해봅니다.
    for (let i = 0; i < 4; i++) {
      const nr = r + DR[i];
      const nc = c + DC[i];

      // ➑ 이동할 수 있는 위치인 경우
      if (isValidPos(nr, nc) && !visited.has(`${nr},${nc}`) && board[nr][nc]) {
        canMove = true;
        // ➒ 두 플레이어의 위치가 같으면 A 플레이어가 이긴 것이므로 True와 step + 1을 반환합니다.
        if (alphaPos[0] === betaPos[0] && alphaPos[1] === betaPos[1]) {
          return [true, step + 1];
        }

        // ➓ 재귀적으로 호출하여 이긴 여부와 남은 턴수를 가져옵니다.
        const [win, stepsLeft] = step % 2 === 0
          ? recursiveFunc([nr, nc], betaPos, new Set([...visited, `${r},${c}`]), step + 1)
          : recursiveFunc(alphaPos, [nr, nc], new Set([...visited, `${r},${c}`]), step + 1);

        // ⓫ 상대 플레이어가 이긴 경우만 true로 유지합니다.
        isOpponentWinner &= win;

        // ⓬ 이긴 경우와 지는 경우를 저장합니다.
        if (win) {
          winSteps.push(stepsLeft);
        } else {
          loseSteps.push(stepsLeft);
        }
      }
    }

    // ⓭ 이동할 수 있는 위치가 없는 경우
    if (!canMove) {
      return [false, step];
    }

    // ⓮ 상대 플레이어가 이긴 경우
    if (isOpponentWinner) {
      return [false, Math.max(...winSteps)];
    }

    // ⓯ 현재 플레이어가 이긴 경우
    return [true, Math.min(...loseSteps)];
  }

  // ⓰ A 플레이어가 이길 때까지 걸리는 최소 턴 수를 반환합니다.
  const [_, steps] = recursiveFunc(aloc, bloc, new Set(), 0);

  return steps;
}
