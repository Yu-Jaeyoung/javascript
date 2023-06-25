let foo = 1;

{
  // let, const 키워드로 선언한 변수가 호이스팅되지 않는다면 전역 변수를 참조해야함
  // 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에
  // 참조 에러(ReferenceError)가 발생
  console.log(foo);
  let foo = 2; // 지역 변수;
}