import { useState } from 'react';
import { createContext } from 'react';

// Context
const SelectContext = createContext({
  contextName: '',
  color: '',
  setColor: () => {},
});

// 컨테이너 컴포넌트를 생성 (Provider 컴포넌트 - 내부에 Context 제공자가 들어온다)
function SelectContextProvider(props) {
  const [color, setColor] = useState('RED');
  const selectValue = {
    contextName: 'Select Context',
    color,
    setColor,
  };
  return <SelectContext.Provider value={selectValue}>{props.children}</SelectContext.Provider>;
}

export { SelectContext, SelectContextProvider };
