/*
👉 **`[1, 2, 3, 4, 5]`** 배열의 각 요소에 2를 곱한 새 배열을 만드는 함수를 작성하세요.
- **`map`** 메소드를 사용하고, 결과 배열을 출력하세요!
*/
const num = [1, 2, 3, 4, 5];
function mul(arr) {
    return arr.map(num => num*2);
}
console.log(mul(num));