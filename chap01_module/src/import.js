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

const name = 'Module';

const dom = `
  <div>
    Name: ${name} / ${nick} / ${one.name}<br>
    Age: ${age} / ${one.age}<br>
    Check: ${check}<br>
    Array: ${arr[0]} / ${one.arr[1]} / ${arr[2]}<br>
    User: ${user.name} / ${one.user.age} / ${user.address}<br>
    onAdd: ${add(20, 30)}<br>

    <hr>

    Name: <br>
    onTotal: <br>
    onAvg: <br>
    X: , Y: 
  </div>
`;

console.log(dom);