const users = [
    {id: 1, name: "Lee"},
    {id: 2, name: "Kim"},
    {id: 2, name: "Choi"},
    {id: 3, name: "Park"},
];

// id가 2인 첫 번째 요소를 반환. find 메서드는 배열이 아니라 요소를 반환
console.log(users.find(user => user.id === 2));