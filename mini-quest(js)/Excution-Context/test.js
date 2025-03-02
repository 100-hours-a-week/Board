const message = "Hello, JavaScript";

const showMessage = () => {
    console.log(message);
    let message = "Hello, ES6!";
    console.log(message);
}

showMessage();

/*
1번 째 message는 에러가 뜨고,
2번 째 message는 에러가 뜨지 않았다면 Hello, ES6이 출력된다.
전역 실행 컨텍스트에 의해 message가 const로 할당되어 메모리에 저장된다.
값은 Hello, JavaScript로 할당되고
showMessage도 메모리에 할당된다.
이 때 함수 내부에 let message가 먼저 선언되어 메모리에 할당되는데, message는 내부에 TDZ 상태로 있기 때문에
refference 에러가 발생한다. 젤 상단에 hello, JavaScript가 있지 않나? 라고 생각할 수 있는데,
스코프 체인에 의해 함수 내부에서 먼저 찾기 때문이다. 만약 let message가 없다면, 스코프체인에 의해 message 둘 다
Hello, JavaScript가 출력될 것이다.
*/