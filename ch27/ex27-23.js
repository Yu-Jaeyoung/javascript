// 배열은 요소를 최대 4,294,967,295개 가질 수 있음
new Array(4294967295);

// 전달된 인수가 0 ~ 4,294,967,295를 벗어나면 RangeError가 발생
new Array(4294967296);

// 전달된 인수가 음수이면 에러가 발생
new Array(-1);