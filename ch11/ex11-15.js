const v = 1;

// 깊은 복사라고 부르기도 함
const c1 = v;
console.log(c1 === v);

const o = {x: 1};

// 얕은 복사라고 부르기도 함
const c2 = o;
console.log(c2 === o); // true