const color = 'blue';

const firstLevel = () => {
    let color = 'red';
    const secondLevel = () => {
        let color = 'green';
        console.log(color); //(1)
    };
    secondLevel();
    console.log(color); //(2)
};

firstLevel();
console.log(color); //(3)
 
/*
(1) -> green
(2) -> green
(3) -> red
라고 생각했다. 왜냐하면 secondLevel이 수행되는 순간 color가 덮어씌어진다라고 생각했기 때문이다.
근데 변수 섀도잉 때문에 뭔가 덮어쓴다?라고 생각했던 것 같다.
그냥 스코프 내에서 찾아보고 없으면 상위 스코프로 올라가며 찾아가는 것이라고 생각해야겠다.
변수는 그냥 함수 안에서만 유효하다? 라고 생각하면 될 것 같다.
그래서 답은 아래와 같다.
(1) -> green
(2) -> red
(3) -> blue
단계는 아래와 같다.
전역 실행 컨텍스트 실행 -> color, firstLevel 들어감
그 다음으로 firstLevel 함수 실행 컨텍스트가 되고
내부에 color, secondLevel이 실행된다.
그 다음에 secondLevel의 함수 실행 컨텍스트가 실행되고,
또 그 안의 변수가 담긴다.
내부 함수가 외부 함수의 변수를 계속 유지해야 클로저가 되는 것이다!
 */