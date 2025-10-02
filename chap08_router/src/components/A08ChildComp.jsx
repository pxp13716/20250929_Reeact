/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
const isActive = ({ isActive }) => isActive ? { color: 'orange', fontWeight: 'bold' } : {}

function ChildComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>CHILD ROUTER</h3>

      <div className="mb-3">
        <NavLink to="/child" end>ONE</NavLink> | {' '}
        <NavLink to="/child/two" end>TWO</NavLink> | {' '}
        <NavLink to="/child/three" end>THREE</NavLink> | {' '}
        <NavLink to="/currency">CURR</NavLink>
      </div>

      <hr />

      {/* /child/XXX 형태의 컴포넌트가 표시될 위치 */}
      <Outlet context={{ count, setCount }}></Outlet>
    </div>
  );
};
export default ChildComponent;
