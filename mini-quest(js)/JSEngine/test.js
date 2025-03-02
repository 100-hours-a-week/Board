//undefined 출력 -> 호이스팅 되고, 변수가 초기화 되기 때문에
console.log(messageVar);
var messageVar = "Hello with var"


//아래 3개는 refferenc 에러 발생. 호이스팅이 되지만, 초기화 되지 않기 때문에 TDZ 안에 있음.
console.log(messageLet);
let messageLet = "Hello with let!";

console.log(messageConst);
const messageConst = "Hello with Const";

console.log(greet());
const greet = () => {
  "Hello, greet()"
} 
