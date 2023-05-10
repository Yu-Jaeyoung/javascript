// Scope-Safe Constructor Pattern
function Circle(radius) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고 this에 바인딩
  // 이때 this와 Circle은 프로토타입에 의해 연결됨

  // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점에서 this는 전역 객체 window를 가리킴
  // 즉, this와 Circle은 프로토타입에 의해 연결되지 않음
  if (!(this instanceof Circle)) {
    // new 연산자와 함께 호출하여 생성된 인스턴스를 반환
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출됨
const circle = Circle(5);
console.log(circle.getDiameter());