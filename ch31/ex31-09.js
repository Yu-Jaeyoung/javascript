const target = 'Is this all there is?';

// target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색
console.log(target.match(/is/));

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색
console.log(target.match(/is/i));

// target 문자열에서 is 문자열을 대손문자를 구별하여 전역 검색
console.log(target.match(/is/g));

// target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색
console.log(target.match(/is/ig));

