const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
arr.splice(1, 1);
console.log(arr);

// length 프로퍼티가 자동 갱신됨
console.log(arr.length);