import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { name as nick, age, check, arr, user, add } from './exportOne.js'
import * as one from './exportOne.js'
import two, { x, y } from './exportTwo.js'

// 외부 모듈
import $ from 'jquery'

// CSS
import 'bootstrap/dist/css/bootstrap.css'

const name = 'Module';
const dom = `
  <div>
    <img src="${javascriptLogo}" alt="javascriptLogo" height="100">
    <img src="${viteLogo}" alt="viteLogo" height="100">
    <br>

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
