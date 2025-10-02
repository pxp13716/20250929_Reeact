import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeTextAction, addTodoAction } from '@stores/todoStore'

function TodoForm() {
  const { text } = useSelector(store => store.todoStore);
  const dispatch = useDispatch();

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    dispatch(addTodoAction(text));
    dispatch(changeTextAction(''));
    document.querySelector('input').focus();
  }, [dispatch, text]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control"
          value={text} onChange={(evt) => dispatch(changeTextAction(evt.target.value))} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default TodoForm;
