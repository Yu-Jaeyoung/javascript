const set = new Set([1, 2, 3]);

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블
console.log(Symbol.iterator in set);

// 이터러블인 Set 객체는 for ... of 문으로 순회할 수 있음
for (const value of set) {
    console.log(value);
}

// 이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있음
console.log([...set]);

// 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있음
const [a, ...rest] = set;
console.log(a, rest);