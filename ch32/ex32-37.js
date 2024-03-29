// 카멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase) {
  // /.[A-Z]/g는 임의의 한 문자와 대문자로 이루어진 문자열에 매치
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환
  return camelCase.replace(/.[A-Z]/g, match => {
    console.log(match);
    return match[0] + '_' + match[1].toLowerCase();
  });
}

const camelCase = 'helloWorld';
console.log(camelToSnake(camelCase));

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase) {
  // /_[a-z]/g는 _와 소문자로 이루어진 문자열에 매치
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환
  return snakeCase.replace(/_[a-z]/g, match => {
    console.log(match);
    return match[1].toUpperCase();
  });
}

const snakeCase = 'hello_world';
console.log(snakeToCamel(snakeCase));
