/*
👉 화살표 함수를 사용하여 주어진 배열 내의 모든 숫자를 더하는 **`sumArray`** 함수를 정의하세요.
그리고 이 함수를 사용하여 **`[1, 2, 3, 4, 5]`** 배열의 숫자를 모두 더한 결과를 **`total`** 변수에 저장하세요.
- **`sumArray`** 함수는 숫자 배열을 매개변수로 받습니다.
- **`sumArray`** 함수 내에서는 반복문을 사용해 배열의 모든 요소를 더해야 합니다.
*/
const arr = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
};
const total = sumArray(arr);
console.log(total);

//reduce 사용
/*
const arr = [1, 2, 3, 4, 5];
const sumArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
const total = sumArray(arr);
console.log(total);
*/