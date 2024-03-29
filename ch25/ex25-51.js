class Person {
  // private 필드 정의
  #name = '';

  constructor(name) {
    // private 필드 참조
    this.#name = name;
  }

  // name은 접근자 프로퍼티
  get name() {
    // private 필드를 참조하여 trim한 다음 반환
    return this.#name.trim();
  }
}

const me = new Person('Lee');
console.log(me.name);