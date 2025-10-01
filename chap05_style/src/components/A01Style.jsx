import React, { useCallback, useState } from "react";

// CSS는 모두 전역에 등록된다. 따라서 이전 class를 덮어쓸 가능성 있음
// 현재 컴포넌트만 사용하려면 module 방식을 사용 -> 다음 예제
import './css/A01Style.css';

// npm install -D sass-embedded
// 프로젝트 재 시작
import './css/A01Style.scss';

function A01Style() {
  const title1 = 'title';
  const color1 = 'color';

  const myCSS = 'title color';
  const [yourCSS, setCSS] = useState('title color');

  const myStyle = { backgroundColor: 'lightgray', color: 'orange', padding: '10px' }
  const [yourStyle, setStyle] = useState({ backgroundColor: 'lightgray', color: 'orange', padding: '10px' });

  const [check, setCheck] = useState(true);
  const changeCheck = useCallback(() => setCheck(check => !check), []);

  // style 변경
  const enterEvent = useCallback(() => {
    setStyle((style) => {
      return { ...style, backgroundColor: 'orange', color: 'gray' }
    })
  }, []);
  const leaveEvent = useCallback(() => {
    setStyle((style) => {
      return { ...style, backgroundColor: 'lightgray', color: 'orange' }
    })
  }, []);

  // CSS 변경
  const enterCSSEvent = useCallback(() => {
    setCSS('title')
  }, []);
  const leaveCSSEvent = useCallback(() => {
    setCSS('title color')
  }, []);

  return (
    <div className="mb-5">
      {/* JSX에서는 style을 반드시 보간법을 이용한 객체 방식으로 정의해야 한다 */}
      <h3 style={{ backgroundColor: 'lightgray', color: 'orange', padding: '10px' }}>A01 Style</h3>
      <h3 style={myStyle}>A01 Style</h3>
      <h3 style={yourStyle} onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>A01 Style</h3>

      {/* class는 className 사용한다 */}
      <h3 className="title color">A01 Style</h3>
      <h3 className={'title color'}>A01 Style</h3>
      <h3 className={`${title1} ${color1}`}>A01 Style</h3>
      <h3 className={[title1, color1].join(' ')}>A01 Style</h3>
      <h3 className={myCSS}>A01 Style</h3>
      <h3 className={yourCSS} onMouseEnter={enterCSSEvent} onMouseLeave={leaveCSSEvent}>A01 Style</h3>

      <h3 className={check ? 'title color' : undefined}>A01 Style</h3>
      <button onClick={changeCheck}>Check</button>

      <h3 className="scssTitle">A01 Style</h3>
    </div>
  );
}

export default A01Style;
