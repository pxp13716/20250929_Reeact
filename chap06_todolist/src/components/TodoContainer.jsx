import React, { useState, useEffect, useRef } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// DB에서 값을 가져오는 ajax
const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const cnt = useRef(6);

  // TodoList 조작 메서드
  // 함수의 매개변수는 호출하는 곳에서 주입(하위컴포넌트에서 상위컴포넌트에 값 전달)
  const updateTodo = (id) => {
    // map => return 값으로 새로운 배열을 생성
    const todos = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      else return todo;
    });
    setTodoList(todos);
  };
  const deleteTodo = (id) => {
    // filter => return 값이 true인 요소만 모아서 새로운 배열을 생성
    const todos = todoList.filter((todo) => {
      if (todo.id !== id) return true;
      else return false;
    });
    setTodoList(todos);
  };
  const addTodo = () => {
    const todo = { id: cnt.current++, text: '할일', done: false };
    const todos = todoList.concat(todo);
    setTodoList(todos);
  };

  useEffect(() => {
    setTodoList(makeTodo());
  }, []);

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
};
export default TodoContainer;
