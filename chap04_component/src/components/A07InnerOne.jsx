/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react'

const A07InnerOne = (Comp) => {
  function InnerOne(props) {
    const [age, setAge] = useState(10);
    const changeAge = useCallback((x) => {
      setAge(x);
    }, []);

    return (
      <Comp {...props} age={age} changeAge={changeAge}></Comp>
    )
  }
  return InnerOne;
}
export default A07InnerOne;
