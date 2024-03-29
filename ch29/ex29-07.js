console.log(Math.random()); // 0에서 1 미만의 랜덤 실수

/**
 * 1에서 10 범위의 랜덤 정수 취득
 * 1) Math.random으로 0에서 1 미만의 랜덤 실수를 구한다음, 10을 곱해 0에서 10 미만의 랜덤 실수를 구함
 * 2) 0에서 10 미만의 랜덤 실수에 1을 더해 1에서 10 범위의 랜덤 실수를 구함
 * 3) Math.floor로 1에서 10 범위의 랜덤 실수의 소수점 이하를 떼어버린 다음 정수를 반환
 * */
const random = Math.floor((Math.random() * 10) + 1);
console.log(random);