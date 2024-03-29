const array = [1, 2, 3];

// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블
console.log(Symbol.iterator in array);

// 이터러블인 배열은 for ... of 문으로 순회 가능
for (const item of array) {
  console.log(item);
}

// 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있음
console.log([...array]);

// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있음
const [a, ...rest] = array;
console.log(a, rest);