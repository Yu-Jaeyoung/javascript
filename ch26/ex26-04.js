// 콜백 함수를 사용하는 고차 함수 map. 콜백 함수도 constructor이며 프로토타입을 생성
console.log(
  [1, 2, 3].map(function (item) {
    return item * 2;
  }),
);