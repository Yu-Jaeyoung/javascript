function foo(...rest) {
  // 매개 변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터
  console.log(rest);
}

foo(1, 2, 3, 4, 5);