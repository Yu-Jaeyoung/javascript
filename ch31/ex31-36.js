const id = 'abc123';

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사
console.log(/^[A-Za-z0-9]{4,10}$/.test(id));