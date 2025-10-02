/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const todoStore = createSlice({
  name: 'todoStore', // 내부적으로 사용. 중복되지 않은 이름으로 등록
  initialState: {
    todoList: [{ id: 1, text: '첫번째 할 일', done: false }],
    text: '',
  },
  reducers: {
    // action.payload => id
    updateTodoAction: (state, action) => {
      const idx = state.todoList.findIndex((todo) => todo.id === action.payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    // action.payload => id
    deleteTodoAction: (state, action) => {
      const idx = state.todoList.findIndex((todo) => todo.id === action.payload);
      state.todoList.splice(idx, 1);
    },
    // action.payload => text
    addTodoAction: (state, action) => {
      const cnt = state.todoList.at(-1) ? state.todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt, text: action.payload, done: false };
      state.todoList.push(todo);
    },
    // action.payload => text
    changeTextAction: (state, action) => {
      state.text = action.payload;
    },
  },
  // 비동기 처리
  extraReducers: (builder) => {},
});
export default todoStore;

// 동기(reducers)에 있는 Action Export
export const { updateTodoAction, deleteTodoAction, addTodoAction, changeTextAction } =
  todoStore.actions;
