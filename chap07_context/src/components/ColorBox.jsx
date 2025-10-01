import { useContext } from 'react';

// Context Import
import ColorContext from './../contexts/ColorContext';
import { SelectContext } from './../contexts/SelectContext';

function ColorBox() {
  // const colorCtx = useContext(ColorContext);
  // console.log(colorCtx);
  const { contextName, color, setColor } = useContext(ColorContext);
  const selectCtx = useContext(SelectContext);

  return (
    <div>
      <div className="mb-3">
        <h3>
          ColorBox / {contextName} / {color}
        </h3>
        <button onClick={() => setColor('Green')}>GREEN</button>
      </div>

      <div className="mb-3">
        <h3>
          ColorBox / {selectCtx.contextName} / {selectCtx.color}
        </h3>
        <button onClick={() => selectCtx.setColor('BLUE')}>BLUE</button>
      </div>
    </div>
  );
}
export default ColorBox;
