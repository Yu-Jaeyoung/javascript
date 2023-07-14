// 수퍼 클래스
class Base {
  static sayHi() {
    return 'Hi!';
  }
}

// 서브 클래스
class Derived extends Base {
  static sayHi() {
    // super.sayHi는 수퍼클래스의 정적 메서드를 가리킴
    return `${super.sayHi()} How are you doing?`;
  }
}

console.log(Derived.sayHi());