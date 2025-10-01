import { useState } from 'react';
import ColorBox from './components/ColorBox.jsx';
import SelectColor from './components/SelectColor.jsx';
import TodoContainer from './components/TodoContainer.jsx';

// Context Import
// Context는 Provider(값 제공자)와 Consumer(값 수신자 - hook으로 사용)로 나눈다
import ColorContext from './contexts/ColorContext.jsx';
import { SelectContextProvider } from './contexts/SelectContext.jsx';
import { TodoContextProvider } from './contexts/TodoContext.jsx';

function App() {
  const [color, setColor] = useState('orange');
  const colorValue = {
    contextName: 'Color Context',
    color,
    setColor,
  };

  return (
    <div className="m-3">
      <h1>Chap10 Context</h1>

      <ColorContext.Provider value={colorValue}>
        <SelectContextProvider>
          <ColorBox></ColorBox>
          <SelectColor></SelectColor>
        </SelectContextProvider>
      </ColorContext.Provider>

      <hr />

      <TodoContextProvider>
        <TodoContainer></TodoContainer>
      </TodoContextProvider>
    </div>
  );
}

export default App;
