// 객체 병합. 프로퍼티가 중복되는 경우 뒤에 위치한 프로파티가 우선권을 가짐
const merged = Object.assign({}, {x: 1, y: 2}, {y: 10, z: 3});
console.log(merged);

// 특정 프로퍼티 변경
const changed = Object.assign({}, {x: 1, y: 2}, {y: 100});
console.log(changed);

// 프로퍼티 추가
const added = Object.assign({}, {x: 1, y: 2}, {z: 0});
console.log(added);