function solution(strings, n) {
  return strings.sort(function (a, b) {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    } else {
      return a[n] > b[n] ? 1 : -1;
    }
  });
}
