const arr = [1, 2, 3];

// 스프레드 문법을 사용하여 배열 arr을 1, 2, 3으로 펼쳐서 Math.max에 전달
// Math.max( ...[1, 2, 3])은 Math.max(1, 2, 3)과 같음
const max = Math.max(...arr);
console.log(max);