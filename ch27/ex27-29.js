// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined 요소로 채움
console.log(Array.from({length: 3}));

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환
console.log(Array.from({length: 3}, (_, i) => i));