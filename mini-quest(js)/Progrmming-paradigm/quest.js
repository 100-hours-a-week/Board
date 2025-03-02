/*
👉 **`[1, 2, 3, 4, 5]`** 배열의 모든 요소를 더하는 함수를 작성하세요.
- **`reduce`** 메소드를 사용하고, 결과를 출력하세요!
*/
const num = [1, 2, 3, 4, 5];

function sumArrays(arr){
    return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArrays(num));