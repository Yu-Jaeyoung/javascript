(function () {
  // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행 함수의 arguments를 가리킴
  const foo = () => console.log(arguments);
  foo(3, 4);
}(1, 2));

// 화살표 함수 foo의 arguments는 상위 스코프인 전역의 arguments를 가리킴
// 하지만 전역에는 arguments 객체가 존재하지 않음. arguments 객체는 함수 내부에서만 유효
const foo = () => console.log(arguments);
foo(1, 2);