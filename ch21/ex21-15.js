// 표현식인 문
eval("1+2;");
// 표현식이 아닌 문
eval("var x=5");

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언됨
console.log(x);

// 객체 리터럴은 반드시 괄호로 둘러쌈
const o = eval("({a:1})");
console.log(o);

// 함수 리터럴은 반드시 괄호로 둘러쌈
const f = eval("(function (){return 1;})");
console.log(f());