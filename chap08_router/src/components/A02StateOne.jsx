import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function StateComp() {
  const [name, setName] = useState("NolBu");
  const [age, setAge] = useState(20);

  const changeName = () => setName("HungBu");
  const changeAge = (num) => setAge(num);

  // 주소줄에 관련된 정보 취득
  const location = useLocation();
  // console.log(location)

  return (
    <div className="mb-3">
      <h3>STATE ONE</h3>

      <div className="mb-2">
        Name: {name} <br />
        Age: {age + 100} <br />
        {/* A03Navigate에서 값 넘김. 직접 이동하면 값이 없음 => undefined. */}
        State: {location.state?.name} / {location.state?.age}
      </div>

      <div className="mb-3">
        <button onClick={changeName}>Name</button>
        <button onClick={() => changeAge(100)}>Age</button>
      </div>
    </div>
  );
}
export default StateComp;
