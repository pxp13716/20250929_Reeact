/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const countStore = createSlice({
  name: 'countStore', // 내부적으로 사용. 중복되지 않은 이름으로 등록
  initialState: {
    storeName: 'Count Store',
    count: 0,
  },
  // 동기 처리 - Action(외부에서 호출한 메서드)
  // 별도로 export 할 필요가 있다
  reducers: {
    // state => initialState 값
    increaseAction: (state, action) => {
      let value = Number(action.payload);
      if (Number.isNaN(value)) value = 0;
      // useReducer와는 달리 immer가 적용되어 있다
      state.count = state.count + value;
    },
    decreaseAction: (state) => {
      state.count = state.count - 1;
    },
  },
  // 비동기 처리
  extraReducers: (builder) => {},
});
export default countStore;

// 동기(reducers)에 있는 Action Export
export const { increaseAction, decreaseAction } = countStore.actions;
