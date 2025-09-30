import React, { useState } from "react"

function A01State() {
  // 일반 변수 - 리엑트가 관리하지 않는 변수
  let normal = 'Normal';
  const changeNormal = () => {
    normal = '변경 안됨';
    // console.log(normal);
    // document.getElementById('normal').textContent = normal;
  }

  // 상태 변수 - 리엑트가 관리하는 변수. 값이 변경되면 변경된 값으로 즉각 리 렌더링(함수재호출)
  // const [getter변수명, setter함수명] = useState(기본값);
  const [str, setString] = useState('Adam');
  const [num, setNumber] = useState(10);
  const [bool, setBoolean] = useState(true);
  const [arr, setArray] = useState([10, 11]);
  const [obj, setObject] = useState({ name: '놀부', age: 20 });

  // 상태변수를 변경할 이벤트 핸들러


  return (
    <div>
      <h3>A01State</h3>

      <div className="mb-3">
        Normal: <span id="normal">{normal}</span> <br />
        String: {str} <br />
        Number: {num} <br />
        Boolean: {bool} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2]} <br />
        Object: {obj.name} / {obj.age} / {obj.address} <br />
        Function: <br />
      </div>

      <div className="mb-3">
        <button onClick={changeNormal}>Normal</button>
        <button>String</button>
        <button>Number</button>
        <button>Boolean</button>
        <button>Add Array</button>
        <button>Update Array</button>
        <button>Delete Array</button>
        <button>Add Object</button>
        <button>Update Object</button>
        <button>Delete Object</button>
      </div>
    </div>
  )
}

export default A01State
