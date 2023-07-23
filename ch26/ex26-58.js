function sum(x, y) {
  // 인수가 전달되지 않아 매개 변수의 값이 undefined인 경우 기본값을 할당
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1, 2));
console.log(sum(1));