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

  // 함수의 리턴값도 보간법의 대상이 될 수 있다
  const onAdd = (x = 0, y = 0) => x + y;

  // 상태변수를 변경할 이벤트 핸들러
  const changeString = () => setString('방자');
  const changeNumber = (x) => {
    let value = Number(x);
    if (Number.isNaN(value)) value = 0;
    setNumber(value);
  }
  const changeBoolean = () => setBoolean(!bool);

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);  // 1 ~ 100
    // 복사
    const newArr = [...arr];
    newArr.push(random);
    // console.log(newArr, arr, newArr === arr)
    setArray(newArr);
  }
  const updateArray = (idx, value) => {
    const newArr = [...arr];
    newArr[idx] = value;
    setArray(newArr);
  }
  const deleteArray = (idx) => {
    const newArr = [...arr];
    newArr.splice(idx, 1);
    setArray(newArr);
  }

  const addObject = (key, value) => {
    const newObj = { ...obj };
    newObj[key] = value;
    setObject(newObj);
  }
  const updateObject = (key, value) => {
    const newObj = { ...obj };
    newObj[key] = value;
    setObject(newObj);
  }
  const deleteObject = (key) => {
    const newObj = { ...obj };
    delete newObj[key];
    setObject(newObj);
  }

  return (
    <div>
      <h3>A01State</h3>

      <div className="mb-3">
        Normal: <span id="normal">{normal}</span> <br />
        String: {str} <br />
        Number: {num} <br />
        Boolean: {bool ? '동의' : '동의 안함'} <br />
        Array: {arr[0]} / {arr[1]} / {arr[2]} <br />
        Object: {obj.name} / {obj.age} / {obj.address} <br />
        Function: {onAdd()} / {onAdd(10, 20)}<br />
      </div>

      <div className="mb-3">
        <button onClick={changeNormal}>Normal</button>
        <button onClick={() => setString('놀부')}>String</button>
        <button onClick={changeString}>String</button>
        <button onClick={() => changeNumber(100)}>Number</button>
        <button onClick={changeBoolean}>Boolean</button>

        <button onClick={addArray}>Add Array</button>
        <button onClick={() => updateArray(1, 2000)}>Update Array</button>
        <button onClick={() => deleteArray(1)}>Delete Array</button>

        <button onClick={() => addObject('address', 'Seoul')}>Add Object</button>
        <button onClick={() => updateObject('address', 'Busan')}>Update Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>
      </div>
    </div>
  )
}

export default A01State
