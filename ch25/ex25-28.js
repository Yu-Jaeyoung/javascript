class Person {
  // 생산자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 정적 메서드
  static sayHo() {
    console.log("Ho!");
  }
}

// 인스턴스 생성
const me = new Person('Lee');
me.sayHo() // TypeError: me.sayHo is not a function