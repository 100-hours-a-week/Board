/*
👉 아래의 요구사항을 충족하는 자바스크립트 모듈을 작성해보세요.
- "math.js"라는 이름의 파일을 생성하세요.
- 이 파일 안에, 두 숫자를 입력받아 더하는 함수 **`add`**를 정의하고,
이 함수를 외부에서 사용할 수 있도록 내보내세요 (export).
- "app.js"라는 파일에서 "math.js" 모듈의 **`add`** 함수를 가져와(import) 사용하여,
숫자 2와 3을 더한 결과를 콘솔에 출력하세요.
*/

//Default Export / import
import math from './math.js'
console.log(math.add(2,3));


//Named Export / import
/*
import {add} from './math.js'
console.log(add(2,3));
*/