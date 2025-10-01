import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useTimer } from "../hooks/useTimer";

function A05CustomHook() {
  const [data, setData] = useState({
    num: 10,
    str: 'Adam',
    avg: '',
    list: [],
  });

  const changeString = useCallback((evt) => {
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
    setData((data) => {
      const newList = data.list.concat(data.avg);
      return { ...data, list: newList };
    });
  }, []);

  useEffect(() => {
    // document.querySelector('input[name="num"]').style.backgroundColor = 'orange';
    numRef.current.style.backgroundColor = 'lightgray';
  }, []);

  // 사용자 정의 Hook
  const { count, increase, decrease, reset } = useCounter(0)
  const today = useTimer();

  const numRef = useRef(null);

  const getAverage = useMemo(() => {
    console.log('getAverage...')
    if (data.list.length === 0) return 0;
    const total = data.list.reduce((acc, item) => {
      return acc + item;
    }, 0);

    return total / data.list.length;
  }, [data.list]);


  return (
    <div className="mb-5">
      <h3>A05 useState, useEffect</h3>

      <div className="mb-3">
        Count: {count} <br />
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>RESET</button>
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
export default A05CustomHook;
