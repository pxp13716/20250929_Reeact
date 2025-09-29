// View는 함수 또는 Class로 정의 가능. Class는 16.8 버전 이후로 거의 사용 안함
// 이러한 조각 View를 컴포넌트라 한다.

/*
JSX
  1. 반드시 종료 태그가 존재해야 한다.
    <br></br> OR <br />
  2. JSX는 ""(문자열)로 묶지 않는다. 문자열은 그대로 문자로 표시된다
  3. JSX의 태그 속성명은 JavaScript 속명 방식을 따른다
    class => className, <label for=".."> => <label htmlFor="..">
  4. View의 반환(JSX)은 반드시 단일 태그만 가능하다
    에러 => 요소가 2개 반환됨
    return <h1>Hello</h1>
      <div>World!!</div>
    
    정상 => 요소가 1개만 반환됨
    return <div>
      <h1>Hello</h1>
      <div>World!!</div>
    </div>
*/

/*
function First() {
  // return으로 JSX 문법의 View를 반환한다
  return <h1>Hello World!!!</h1>
}
export default First;
*/

/*
const elem = <h1>Hello World!!!</h1>
function App() {
  return elem;
}
export default App;
*/

// View의 반환(JSX)은 반드시 단일 태그만 가능하다
/*
// Error
const App = () => {
  return <h1>Hello World!!!</h1>
  <div>Good Morning</div>
}
export default App;
*/

/*
const App = () => {
  return <div>
    <h1>Hello World!!!</h1>
    <div>Good Morning</div>
  </div>
}
export default App;
*/

/*
const elem = <div>
  <h1>Hello World!!!</h1>
  <div>Good Morning 2</div>
</div>;

const App = () => {
  return elem;
}
export default App;
*/

/*
// return 다음에 태그가 오는걸 방지할 목적으로 ( )로 묶어 사용한다
const App = () => {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <div>Good Morning</div>
    </div>
  )
}
export default App;
*/

// 1. 반드시 종료 태그가 존재해야 한다.
// 3. JSX의 태그 속성명은 JavaScript 속명 방식을 따른다

// 이 컴포넌트에서만 사용할 목적의 CSS 파일 import (하지만 전역으로 표시됨)
// 먼저 올라온 동일 이름의 CSS의 클래스, ID를 덮어쓴다.
// import './App.css';

// eslint rule 비 활성화 - eslint.config.js에서 전역 설정은 하지 말자
/* eslint-disable no-unused-vars */

// img, svg 파일 import
import viteLogo from '/svg/vite.svg';         // dist에 svg 폴더가 통으로 복사
import reactLogo from './assets/react.svg';   // assets 이미지는 리소스로 관리

// 분리된 View를 import
import A01Comp from './components/A01Comp';
import A02Comp from './components/A02Comp'

// react hook
import { useState } from 'react';

// 일반 변수 => 리엑트 변수의 값 변경에 관여하지 않는다.
const x = 10;

let name = '흥부';
let age = 20;
const check = true;
const arr = [10, 11];
const user = { name: 'Adam', age: 30 };
const onAdd = (x = 0, y = 0) => `${x} + ${y} = ${x + y}`;

const changeAge = () => age = 2000;
const changeName = (x) => name = x;

const App = () => {
  // 상태변수 => 값이 변경되면 리엑트는 변경된 값으로 즉각 화면을 재 구성한다(리 렌더링 - 함수를 재 호출)
  // const [getter, setter] = useState(초기값);
  const [num, setNumber] = useState(10);
  const changeNumber = (x) => setNumber(x);

  return (
    <div className="m-3">
      <h1>Hello World!!!</h1>

      <div className="mb-3">
        <h3>바인딩 표기법</h3>
        값이 boolean, undefined, null은 화면에 표시되지 않는다<br />
        Name: {name} <br />
        Age: {age} <br />
        Check: {check ? '동의' : '동의 안함'} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2] ?? 0} <br />
        User: {user.name} / {user.age} / {user.address ?? 'UNKNOWN'} <br />
        Function: {onAdd()} / {onAdd(10, 20)} <br />
        Num: {num} <br />
      </div>
      <br />

      <div className="mb-3">
        바인딩 내부에서 표현식 사용 가능<br />
        10 + 20: {10 + 20} <br />
        Length: {arr.length} <br />
        Length * 100: {arr.length * 100} <br />
        ===: {arr[0] > 0 ? '크다' : '작다'} <br />
        &&: {(arr[0] > 0 && arr[1]) > 0 ? '둘다 크다' : '작다'} <br />
      </div>

      <div className="mb-3">
        {/* 매겨변수가 없거나 event 객체 1개만 존재하는 경우는 함수명만 기술 */}
        <button onClick={changeAge}>AGE</button>
        {/* 매개변수가 event 이외의 경우는 "() => 함수명(매개변수값)" 형태로 사용 */}
        <button onClick={() => changeName('방자')}>NAME</button>

        <button onClick={() => changeNumber(3000)}>NUN</button>
      </div>

      <div className='mb-3'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="vite" height="100" />
        </a>
        <img src={reactLogo} alt="react" height="100" />
      </div>

      <div className="mb-3">
        위 실장은 이날 오후 용산 대통령실에서 열린 기자간담회에서 최근 조지아주에서 발생한 한국인 근로자 구금 문제와 관련해 “비자 문제를 조속히 해결하겠다”고 밝혔다. 그는 “비자 제도 개선을 위한 협의가 이제 막 시작됐다”며 “예측 가능하도록 개선할 것이고, 나아가 새로운 비자 카테고리 신설도 추진할 것”이라고 말했다. 이어 “전문직 비자 분야까지 확대할 수 있겠지만, 아직은 협상이 필요하다”며 “가급적 조속한 성과를 내기 위해 노력하겠다”고 설명했다.
      </div>

      <A01Comp></A01Comp>

      <A02Comp />

    </div>
  )
}
export default App;


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
