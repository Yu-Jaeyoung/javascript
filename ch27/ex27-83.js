const arr = [1, 2, 3];

// 배열에 요소 1이 포함되어 있는지 인덱스 1부터 확인
console.log(arr.includes(1, 1));

// 배열에 요소 3이 포함되어 있는지
// 인덱스 2 (arr.length - 1)부터 확인
console.log(arr.includes(3, -1));