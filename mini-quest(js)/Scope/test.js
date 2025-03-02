let temperature = 25;
console.log(temperature);

temperature = 30;
console.log(temperature);

const MAX_TEMPERATURE = 35;
console.log(MAX_TEMPERATURE);

MAX_TEMPERATURE = 30;
console.log(MAX_TEMPERATURE);

/*
TypeError: Assignment to constant variable. 가 발생한다.
let은 변수 재할당이 가능하지만
const는 재할당이 불가능하기 때문이다.
*/