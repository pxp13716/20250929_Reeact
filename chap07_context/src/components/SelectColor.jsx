import { useContext } from 'react';
import ColorContext from './../contexts/ColorContext';
import { SelectContext } from './../contexts/SelectContext';

function SelectColor() {
  const { contextName, color, setColor } = useContext(ColorContext);
  const selectCtx = useContext(SelectContext);

  return (
    <div>
      <div className="mb-3">
        <h3>
          SelectColor / {contextName} / {color}
        </h3>
        <button onClick={() => setColor('Green')}>COLOR</button>
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
export default SelectColor;
