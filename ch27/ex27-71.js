const todos = [
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JavaScript', completed: false},
];

// 얕은 복사(shallow copy)
const _todos = todos.slice();
// const _todos = [ ...todos];

// _todos와 todos는 참조값이 다른 별개의 객체
console.log(_todos === todos);

// 배열의 요소의 참조값이 같다. 즉, 얕은 복사가 된것
console.log(_todos[0] === todos[0]);
