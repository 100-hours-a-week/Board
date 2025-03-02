/*
👉 아래 과정을 수행하는 코드를 작성해 보세요.
그리고, 출력된 순서를 보면서 코드가 왜 해당 순서대로 실행되는지 설명해보세요.

1. 콘솔에 'Start'를 출력합니다.
2. **`setTimeout`**을 사용하여, 1초 후에 'Async Operation Complete'를 출력합니다.
3. **`setTimeout`**의 호출 이후, 즉시 'End'를 출력합니다.
*/
function async(){
    setTimeout(() => {console.log("Async Operation Complete")}, 1000);
}

console.log("Start");
async();
console.log("End");