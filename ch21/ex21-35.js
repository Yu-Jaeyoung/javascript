const uri = "http://example.com?name=이응모&job=programmer&teacher";

// encodeURI는 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩
const enc = encodeURI(uri);
console.log(enc);

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩
const dec = decodeURI(enc);
console.log(dec);