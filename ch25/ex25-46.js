class Person {
  // 클래스 필드에 문자열을 할당
  name = 'Lee';

  // 클래스 필드에 함수를 할당
  /*
  getName = function () {
    return this.name;
  };
  */

  // 화살표 함수로 정의할 수 있음
  getName = () => this.name;
}

const me = new Person();
console.log(me);
console.log(me.getName());