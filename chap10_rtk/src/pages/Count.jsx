import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

// 호출할 Action import
import { increaseAction, decreaseAction } from './../stores/countStore'

function Counter() {
  const { storeName, count } = useSelector((store) => store.countStore);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {storeName}: {count}
      </h3>
      <button onClick={() => dispatch(increaseAction(3))}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  );
}
export default Counter;
