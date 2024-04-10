function solution(n) {
  const fib = [0, 1]; // F(0) = 0, F(1) = 1
  for (let i = 2; i <= n; i++) {
    fib.push((fib[i - 1] + fib[i - 2]) % 1234567);
  }
  return fib[n];
}

// function solution(n) {
//   const fib = [0, 1]; // F(0) = 0, F(1) = 1
//   for (let i = 2; i <= n; i++) {
//     fib.push((fib[i - 1] + fib[i - 2]));
//   }
//   return fib[n] % 1234567;
// }
