/*
개별 export 된 요소를 import
1. { } 내부에 선언되는 변수명은 export 한 변수명과 동일한 이름으로 정의해야 한다.
2. HTML에서 type을 module로 정의해야 한다
  type="text/javascript" => type="module"
3. 이미 사용되고 있는 변수명이 있다면 as로 이름 변경 가능. 변경 후에는 변경된 이름만 사용 가능
*/
import { name as nick, age, check, arr, user, add } from './exportOne.js'

// 한 이름으로 묶어서 사용
import * as one from './exportOne.js'
// console.log(one);


// default import
// 파일의 export 변수명과는 상관없음. import 파일에서 사용되지 않는 임의의 변수명으로 정의해서 사용
// import two from './exportTwo.js'
// import  from './exportTwo.js'

// 반드시 default가 먼저 정의되어야 한다.
import two, { x, y } from './exportTwo.js'

// const two = 2;                   // 변수명 중복 에러
// console.log(two);                // { pName: 'value', .... }

// 외부 모듈 import - Webpack, rollUp 이라는 번들 라이브러리와 함께 사용할 필요가 있다.
// import $ from 'jquery';          // Error


const name = 'Module';

// || (OR 연산자) => 앞의 값이 undefined, null, 0, -0, NaN, '', false 인 경우 || 뒤의 값을 사용. 이외의 경우는 기본값 사용
// ??(널리쉬 연산자) => 앞의 값이 undefined, null인 경우 ?? 뒤의 값을 사용. 이외의 경우는 기본값 사용
const dom = `
  <div>
    Name: ${name} / ${nick} / ${one.name}<br>
    Age: ${age} / ${one.age}<br>
    Check: ${check ? '동의' : '동의 안함'}<br>
    Array: ${arr[0]} / ${one.arr[1]} / ${arr[2] ?? 0}<br>
    User: ${user.name} / ${one.user.age} / ${user.address ?? 'UNKNOWN'}<br>
    onAdd: ${add(20, 30)}<br>

    <hr>

    pName: ${two.pName} <br>
    Name: ${two.name()} <br>
    onTotal: ${two.getTotal(100, 90)} < br >
    onAvg: ${two.getAvg(190, 2)} <br>
    X: ${x}, Y: ${y}
  </div>
`;

// console 출력
console.log(dom);

// dom 출력
document.getElementById('root').innerHTML = dom;

// jQuery 출력
$('#app').html(dom);
