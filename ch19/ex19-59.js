const person = {
  name: "Lee",
  address: "Seoul",
};

// person 객체에 name 프로퍼티가 존재
console.log("name" in person);
// person 객체에 address 프로퍼티가 존재
console.log("address" in person);
// person 객체에 age 프로퍼티가 존재하지 않음
console.log("age" in person);