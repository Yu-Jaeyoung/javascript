// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가시킴
  return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());
