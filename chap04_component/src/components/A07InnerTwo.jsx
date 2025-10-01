/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react'

const A07InnerTwo = (Comp) => {
  function InnerTwo(props) {
    const [address, setAddress] = useState(10);
    const changeAddress = useCallback((x) => {
      setAddress(x);
    }, []);

    return (
      <Comp {...props} address={address} changeAddress={changeAddress}></Comp>
    )
  }
  return InnerTwo;
}
export default A07InnerTwo;
