import React, { useCallback, useState } from "react";

function A01Style() {
  const title = 'title';
  const color = 'color';
  const myStyle = 'title color';

  const [yourStyle, setStyle] = useState('title color');
  const [check, setCheck] = useState(true);

  const changeCheck = useCallback(() => setCheck(check => !check), []);

  return (
    <div className="mb-5">
      <h3>A01 Style</h3>
      <h3>A01 Style</h3>
      <h3>A01 Style</h3>
      <h3>A01 Style</h3>

      <button onClick={changeCheck}>Check</button>
    </div>
  );
}

export default A01Style;
