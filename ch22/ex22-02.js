function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없음.
  // ????.radius = radius;
}

/*
Circle.prototype.getDiameter() = function () {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없음
  // return 2 * ????.radius;
};
*/

// 생성자 함수로 인스턴스를 생성하려면 먼자 생성자 함수를 정의해야함
const circle = new Circle(5);