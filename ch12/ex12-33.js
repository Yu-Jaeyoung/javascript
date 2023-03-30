// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받음
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

// 외부 상태
var num = 100;
var person = {name: "Lee"};

console.log(num); // 100
console.log(person); // {name: "Lee"}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달
changeVal(num, person);

// 원시 값은 훼손되지 않음
console.log(num); // 100

// 객체는 원본이 훼손
console.log(person); // {name: "Kim"}