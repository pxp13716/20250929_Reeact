import { TodoContext } from './../contexts/TodoContext';
import { useContext } from 'react';

function TodoForm() {
  const { state, action } = useContext(TodoContext);

  const sendData = (evt) => {
    evt.preventDefault();
    if (state.text.trim() !== '') {
      action.addTodo(state.text);
      action.changeText('');
      document.querySelector('input').focus();
    }
  };

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={state.text}
          onChange={(evt) => action.changeText(evt.target.value)}
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-primary mr-1"
            onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
