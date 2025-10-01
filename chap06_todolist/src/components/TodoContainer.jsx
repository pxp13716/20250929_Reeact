/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useCallback } from 'react';

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
  // const cnt = useRef(6);//

  // TodoList 조작 메서드
  // 함수의 매개변수는 호출하는 곳에서 주입(하위컴포넌트에서 상위컴포넌트에 값 전달)
  const updateTodo = useCallback((id) => {
    // setTodoList((todoList) => {
    //   return todoList.map((todo) => {
    //     if (todo.id === id) return { ...todo, done: !todo.done };
    //     else return todo;
    //   });
    // });
    setTodoList((todoList) => {
      return todoList.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      });
    });
  }, []);
  const deleteTodo = useCallback((id) => {
    // setTodoList((todoList) => {
    //   return todoList.filter((todo) => {
    //     if (todo.id !== id) return true;
    //     else return false;
    //   });
    // });
    setTodoList((todoList) => {
      return todoList.filter((todo) => todo.id !== id);
    });
  }, []);
  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      // const todo = { id: cnt.current++, text, done: false };
      const cnt = todoList.at(-1) ? todoList.at(-1).id + 1 : 1;
      // const todo = { id: cnt, text, done: false };
      return todoList.concat({ id: cnt, text, done: false });
    });
  }, []);
  /*
  const updateTodo = useCallback(
    (id) => {
      // map => return 값으로 새로운 배열을 생성
      const todos = todoList.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      });
      setTodoList(todos);
    },
    [todoList]
  );
  const deleteTodo = useCallback(
    (id) => {
      // filter => return 값이 true인 요소만 모아서 새로운 배열을 생성
      const todos = todoList.filter((todo) => {
        if (todo.id !== id) return true;
        else return false;
      });
      setTodoList(todos);
    },
    [todoList]
  );
  const addTodo = useCallback(
    (text) => {
      const todo = { id: cnt.current++, text, done: false };
      const todos = todoList.concat(todo);
      setTodoList(todos);
    },
    [todoList]
  );
  */

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
