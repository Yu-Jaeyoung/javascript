const target = 'Is this all there is?';

// 'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별
const regExp = /is/;

// target과 정규 표현식이 매치하는지 테스트
console.log(regExp.test(target));

// target과 정규 표현식의 매칭 결과를 구함
console.log(target.match(regExp));