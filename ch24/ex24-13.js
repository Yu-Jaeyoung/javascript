// 카운트 상태 변경 함수
const Counter = (function () {
  // 1. 카운트 상태 변수
  let num = 0;

  function Counter() {
    // this.num = 0; // 2. 프로퍼티는 public이므로 은닉되지 않음
  }

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
}());

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());