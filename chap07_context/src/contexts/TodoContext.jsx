/* eslint-disable no-unused-vars */
import { useCallback, useState, useEffect, createContext } from 'react';
// npm i immer
import { produce } from 'immer';

const TodoContext = createContext({
  state: {
    todoList: [],
    text: '',
  },
  action: {
    updateTodo: (id) => {},
    deleteTodo: (id) => {},
    addTodo: (text) => {},
    changeText: (text) => {},
  },
});

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

// Provider Container 생성
function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setTodoList(makeTodo());
  }, []);

  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      // id 값 기준으로 배열의 index 값을 추출 => findIndex
      // id 값 기준으로 배열의 객체 값을 추출 => find
      const todos = produce(todoList, (draft) => {
        // draft[id].done = !draft[id].done;
        const todo = draft.find((todo) => todo.id === id);
        // console.log(todo);
        todo.done = !todo.done;
      });
      return todos;
    });
  }, []);
  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      const todos = produce(todoList, (draft) => {
        const idx = draft.findIndex((todo) => todo.id === id);
        draft.splice(idx, 1);
      });
      return todos;
    });
  }, []);
  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      const cnt = todoList.at(-1) ? todoList.at(-1).id + 1 : 1;
      const todos = produce(todoList, (draft) => {
        const todo = { id: cnt, text, done: false };
        draft.push(todo);
      });
      return todos;
    });
  }, []);
  const changeText = useCallback((text) => setText(text), []);

  /*
  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return todoList.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      });
    });
  }, []);
  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return todoList.filter((todo) => todo.id !== id);
    });
  }, []);
  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      const cnt = todoList.at(-1) ? todoList.at(-1).id + 1 : 1;
      return todoList.concat({ id: cnt, text, done: false });
    });
  }, []);
  const changeText = useCallback((text) => {
    setText(text);
  }, []);
  */

  const todoValue = {
    state: { todoList, text },
    action: { updateTodo, deleteTodo, addTodo, changeText },
  };

  return <TodoContext.Provider value={todoValue}>{props.children}</TodoContext.Provider>;
}

export { TodoContext, TodoContextProvider };
