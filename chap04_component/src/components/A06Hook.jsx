import React, { useCallback, useEffect, useMemo, useReducer } from "react";

// module scope가 된다
import { func, init } from './../reducer/A06Reducer'

function A06Hook() {
  const [data, dispatch] = useReducer(func, init)
  /*
  const [data, dispatch] = useReducer((state, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
      case 'A06HOOK/NUMBER':
        {
          let value = Number(action.payload.value);
          if (Number.isNaN(value)) value = 0;
          return { ...state, [action.payload.name]: value };
        }
      case 'A06HOOK/STRING':
        // 제약조건이 필요하면 기술
        return { ...state, [action.payload.name]: action.payload.value };
      case 'A06HOOK/TIMER':
        return { ...state, today: new Date() };
      case 'A06HOOK/ADDLIST':
        {
          const newList = state.list.concat(state.avg)
          return { ...state, list: newList };
        }

      default:
        return state;
    }
  }, {
    num: '',
    str: '',
    today: new Date(),
    avg: '',
    list: [],
  });
  */

  const changeNumber = useCallback((evt) => {
    dispatch({ type: 'A06HOOK/NUMBER', payload: evt.target })
  }, []);
  const changeString = useCallback((evt) => {
    dispatch({ type: 'A06HOOK/STRING', payload: evt.target })
  }, []);
  const addList = useCallback(() => {
    dispatch({ type: 'A06HOOK/ADDLIST' })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'A06HOOK/TIMER' })
    }, 2000)
  }, []);

  const getAverage = useMemo(() => {
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
        Num: {data.num}
        <input type="text" name="num" className="form-control" value={data.num} onChange={changeNumber} />
      </div>

      <div className="mb-3">
        Str: {data.str}
        <input type="text" name="str" className="form-control" value={data.str} onChange={changeString} />
      </div>

      <div className="mb-3">
        Today: {data.today.toLocaleString()}<br />
      </div>

      <div className="mb-3">
        Avg: {data.avg} / {data.list.join(', ')} / {getAverage}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" value={data.avg} onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A06Hook;
