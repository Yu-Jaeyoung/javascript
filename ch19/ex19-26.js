const obj = new Object();
obj.x = 1;

// Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속 받음
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));