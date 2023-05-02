const person = {
  name: "Lee",
  address: {city: "Seoul"},
};

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결
console.log(Object.isFrozen(person)); // true

// 중첩 객체까지 동결하지 못함
console.log(Object.isFrozen(person.address)); // false

person.address.city = "Busan";
console.log(person); // {name: 'Lee', address: {city: 'Busan'}}