// 2진수 리터럴(0b로 시작)은 제대로 해석하지 못함. 0 이후가 무시
console.log(parseInt("0b10"));
// 8진수 리터럴(ES6에서 도입. 0o로 시작)은 제대로 해석하지 못한다. 0 이후 무시
console.log(parseInt("0o10"));