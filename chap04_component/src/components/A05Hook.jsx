import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

/*
  16.8 이전은 상태가 필요한 컴포넌트는 Class로 작성함. 함수는 단순 View로만 사용
  React 16.8 버전부터 Hook 사용 가능. Class 컴포넌트를 함수형으로 변경 시작
*/

function A05Hook() {
  /*
  1. 상태변수
    const [getter, setter] = useState(기본값);
    setter 사용법
    1] setter(value)
    2] setter((현재상태의 getter값) => { return 변경할 값 })
  */
  const [data, setData] = useState({
    num: 10,
    str: 'Adam',
    avg: '',
    list: [],
  });
  const [today, setToday] = useState(new Date());

  /*
  2. useCallback => 함수 자체를 메모이제이션(캐시화)
    중요] 메모이제이션 될때 내부의 상태변수도 메모이제이션되는 순간의 값을 기억해서 메모이제이션(캐시화)가 된다.

    const handleName = useCallback( () => { }, [의존관계] );
    의존관계는 어떤 상태변수가 변경될때 이 함수를 다시 캐시화 할 것인가를 지정(다시 생성)
    이때 캐시화되면서 변경된 상태변수 값을 기억
    다른 Hook 또는 Hook을 사용한 함수를 사용한 경우도 의존관계에 포함되어야 한다
  */
  /*
  const changeString = useCallback((evt) => {
    const newData = { ...data, str: evt.target.value };
    setData(newData);
  }, [data]);

  const changeNumber = useCallback((evt) => {
    let value = Number(evt.target.value);
    if (Number.isNaN(value)) value = 0;
    setData({ ...data, num: value });
  }, [data])

  const addList = useCallback(() => {
    const newList = data.list.concat(data.avg);
    const newData = { ...data, list: newList };
    setData(newData);
  }, [data]);
  */

  // 상태변수가 객체타입인 경우는 반드시 useCallback과 함게 setter의 콜백함수 형태로 구현
  const changeString = useCallback((evt) => {
    // x는 현재 변경되어 있는 getter의 값. 즉 현재 data
    setData((x) => {
      const newData = { ...x, str: evt.target.value };
      return newData;
    });
  }, []);

  const changeNumber = useCallback((evt) => {
    setData((x) => {
      let value = Number(evt.target.value);
      if (Number.isNaN(value)) value = 0;
      return { ...x, [evt.target.name]: value }
    });
  }, []);

  const addList = useCallback(() => {
    // 매개변수 이름을 getter의 이름 그대로 사용하는게 관례
    setData((data) => {
      const newList = data.list.concat(data.avg);
      return { ...data, list: newList };
    });
  }, []);

  /*
  3. LifeCycle Hook - 여러번 선언이 가능하다
    Component가 완성된 시점에 발생
    
    useEffect( () => { }, [의존관계] );
    [] 생략 => 아래와 같이 리렌더링 될때마다 매번 실행된다 (사용 안함)
    [] 빈괄호 => 최초 1번만 실행된다
    [상태변수] => 상태변수가 변경될때만 다시 등록되어 실행된다

    setTimeout(() => {
      setToday(new Date());
    }, 2000);
  */

  // Ajax 요청, 다른 라이브러리의 값과 동기화 등에 자주 사용된다
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date());
    }, 2000);

    // clean up 함수
    return () => {
      console.log('리렌더링 되기 전 실행. 메모리정리 등...')
    }
  }, [data.num]);

  useEffect(() => {
    // document.querySelector('input[name="num"]').style.backgroundColor = 'orange';
    numRef.current.style.backgroundColor = 'lightgray';
  }, []);

  /*
    4. 값만 유지하는 Hook - useRef(value)
      useState와는 달리 값이 변경되도 화면 리 렌더링은 하지 않는다
    4. Element 요소의 참조 - useRef(null)
  */
  const count = useRef(0);
  // console.log(count);        // const count = { current: 0 };
  const increase = useCallback(() => {
    count.current = count.current + 1;
  }, []);
  const decrease = useCallback(() => {
    count.current = count.current - 1;
  }, []);

  // JSX에서 <input name="num" ref={numRef} .... />
  // numRef.current => document.querySelector('input[name="num"]')
  const numRef = useRef(null);


  /*
    5. useMemo => 함수의 결과값이 메모이제이션. 
    useCallback => 함수 자체가 메모이제이션
    useMemo
    의존관계가 있는 변수값이 변경될때만 재 실행된다
    함수는 매개변수를 가질 수 없다.
    View에서 사용은 프로퍼티 형태로 사용한다 => 매개변수를 가질 수 없는 이유..
  */

  const getAverage = useMemo(() => {
    console.log('getAverage...')
    if (data.list.length === 0) return 0;
    /*
      list = [10, 11, 100]
      배열.reduce((누적변수, item) => { }, 누적변수의 초기값)
      1. acc: 0, item: 10 => 0 + 10 => 10
      2. acc: 10, item: 11 => 10 + 11 => 21
      3. acc: 21, item: 100 => 21 + 100 => 121
    */
    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);

    return total / data.list.length;
  }, [data.list]);


  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        Count: {count.current} <br />
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <div className="mb-3">
        Num: {data.num}
        <input type="text" name="num" className="form-control" onInput={changeNumber} ref={numRef} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control" onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {today.toLocaleString()}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(' - ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control"
            value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
