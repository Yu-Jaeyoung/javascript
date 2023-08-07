const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환
// 다음의 경우 numbers 배열에서 홀수인 요소만 필터링
const odds = numbers.filter(item => item % 2);
console.log(odds)