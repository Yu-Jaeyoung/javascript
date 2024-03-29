// 전체 자릿수 유효. 인수를 생략하면 기본값 0이 지정됨
console.log((12345.6789).toPrecision());

// 전체 1자릿수 유효. 나머지 반올림
console.log((12345.6789).toPrecision(1));

// 전체 2자릿수 유효. 나머지 반올림
console.log((12345.6789).toPrecision(2));

// 전체 6자릿수 유효. 나머지 반올림
console.log((12345.6789).toPrecision(6));