import React from "react";

// 1. 사용할 CSS 파일의 이름을 "파일명.module.css" 형태로 변경한다
// 2. import는 default 방식으로 import 한다.
// 3. css의 참조는 항상 변수를 참조하는 방식으로 구현한다.
// 4. module의 class 중 일부를 전역으로 사용하려면 클래스 명 앞애 ":global .className" 형태로 구현 
import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'
// console.log(one);

function A02StyleModule() {
  return (
    <div className="mb-5">
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
      <h3 className={two.title}>A02 Style Module Component</h3>
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
    </div>
  );
}

export default A02StyleModule;
