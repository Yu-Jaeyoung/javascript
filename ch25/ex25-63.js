// 수퍼 클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브 클래스
class Derived extends Base {
  // 다음과 같이 암묵적으로 constructor가 정의됨
  // constructor( ...args) { super(...args); }
}

const derived = new Derived(1, 2);
console.log(derived);