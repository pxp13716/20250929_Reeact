import Todolist from './TodoList';
import TodoForm from './TodoForm';

const TodoContainer = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <TodoForm></TodoForm>
        <br />
        <Todolist></Todolist>
      </div>
    </div>
  );
};
export default TodoContainer;
