// obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성
const obj = {};

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수
console.log(obj.constructor === Object);