// foo 함수는 Function 생성자 함수로 생성한 함수가 아니라 함수 선언문으로 생성
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수
console.log(foo.constructor === Function);