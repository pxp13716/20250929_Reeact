// 비 제어 컴포넌트
function TodoForm(props) {
  const { addTodo } = props;

  const sendData = (evt) => {
    evt.preventDefault();
    const elem = document.querySelector('input');

    if (elem.value.trim() !== '') {
      addTodo(elem.value);
      elem.value = '';
      elem.focus();
    }
  };

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" />
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

/*
// 제어 컴포넌트
import { useRef, useState } from 'react';

function TodoForm(props) {
  const { addTodo } = props;

  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const changeText = (text) => {
    setText(text);
  };

  const sendData = (evt) => {
    evt.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      changeText('');
      // document.querySelector('input').focus();//
      inputRef.current.focus();
    }
  };

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          ref={inputRef}
          value={text}
          onChange={(evt) => changeText(evt.target.value)}
        />
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
*/
