const arr = [1, 2, 3];

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환
const copy = arr.slice();
console.log(copy);
console.log(copy === arr);