import { createContext } from 'react';

// 값 지정 없이 정의만 한다. Java의 interface
const ColorContext = createContext({
  contextName: '',
  color: '',
  setColor: () => {},
});
export default ColorContext;
