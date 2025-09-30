/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

// 한 개의 View를 두개로 분리
import A02PropOne from './A02PropOne'
import A02PropTwo from './A02PropTwo'

function A02Container() {
  const num = 100;

  // 변경 권한은 App 컴포넌트만 가능하다. 컴포넌트 스코프
  const [address, setAddress] = useState('Seoul');
  const [arr, setArray] = useState([10, 11]);
  const [user, setUser] = useState({ name: 'Adam', age: 20 })

  const onAdd = (x, y) => x * y;
  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);  // 1 ~ 100
    const newArr = [...arr];
    newArr.push(random);
    setArray(newArr);
  }

  return (
    <>
      <A02PropOne type="date"
        name="놀부" age={30} bool={true} num={num} add={address} setAddress={setAddress}
        isChecked onAdd={onAdd}
        arr={arr} addArray={addArray} user={user}></A02PropOne>
      <A02PropOne type="time" name="흥부" age="20" bool="false" add={address}></A02PropOne>

      <A02PropTwo age={30} bool={true} num={num} add={address} setAddress={setAddress}
        isChecked onAdd={onAdd}
        arr={arr} user={user}></A02PropTwo>
      <A02PropTwo></A02PropTwo>
    </>
  )
}

export default A02Container
