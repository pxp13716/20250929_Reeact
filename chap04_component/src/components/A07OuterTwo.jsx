/* eslint-disable react-refresh/only-export-components */
import React from "react";
import A07InnerOne from './A07InnerOne'   // 함수
import A07InnerTwo from './A07InnerTwo'   // 함수

function A07OuterTwo(props) {
  return (
    <div className="mb-5">
      <h3>A07OuterTwo</h3>

      <div className="mb-3">
        props: {props.name}
      </div>

      <div className="mb-3">
        Age: {props.age}<br />
        Address: {props.address}
      </div>

      <button onClick={() => props.changeAge(2000)}>AGE</button>
      <button onClick={() => props.changeAddress('서울')}>ADDRESS</button>
    </div >
  );
}

export default A07InnerTwo(A07InnerOne(A07OuterTwo));
