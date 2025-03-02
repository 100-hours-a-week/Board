/*
👉 아래 과정을 순차적으로 진행하는 코드를 작성해 보세요.

1. 콘솔에 'Start'를 출력합니다.
2. 그 다음, 콘솔에 'Processing'을 출력합니다.
3. 마지막으로, 'End'를 출력합니다.
*/
function Proceessing (){
    const date = Date.now();
    while(Date.now() < date + 1000);
    console.log("Proccessing");
};

console.log("Start");
Proceessing()
console.log("End");