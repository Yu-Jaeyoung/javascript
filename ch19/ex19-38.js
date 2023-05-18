const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person("Lee");

// 인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! MY name is ${this.name}`);
};

// 인스턴스 메서드를 삭제
delete me.sayHello;

// 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않음
delete me.sayHello;

// 프로토타입 메서드가 호출됨
me.sayHello();