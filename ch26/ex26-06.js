const obj = {
  x: 1,
  // foo는 메서드
  foo() {
    return this.x;
  },

  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수
  bar: function () {
    return this.x;
  },
};


console.log(new obj.bar());
console.log(new obj.foo());