// Object.create는 정적 메서드
const obj = Object.create({name: "Lee"});

// Object.prototype.hasOwnProperty는 프로토타입 메서드
console.log(obj.hasOwnProperty("name"));