/* eslint-disable no-unused-vars */
import { Link, NavLink, Outlet } from 'react-router-dom';
import './css/router.css';

const isActive = (props) => {
  // console.log(props);
  const { isActive, isPending } = props;
  return isActive ? { color: 'orange', fontWeight: 'bold' } : undefined;
};
const isActiveCSS = ({ isActive }) => isActive ? 'activeClass' : undefined;

function App() {
  return (
    <div className="m-3">
      <h1>React Router</h1>

      <div className="mb-3">
        <Link to="/">INDEX</Link> |&nbsp;
        <Link to="/currency">CURRENCY</Link> | {' '}

        {/* end는 패스가 정확히 매칭되는 경우만 활성화 할 목적 */}
        <NavLink to="/state" style={isActive} end>STATE ONE</NavLink> | {' '}
        <NavLink to="/state/100" style={isActive} end>STATE TWO</NavLink> | {' '}

        <NavLink to="/navigate" className={isActiveCSS}>NAVIGATE</NavLink> | {' '}
        <NavLink to="/redirect" className={isActiveCSS}>REDIRECT</NavLink> | {' '}
        <NavLink to="/props" className={isActiveCSS}>PROPS</NavLink> | {' '}

        <NavLink to="/paramOne/1001/놀부/11" className={isActiveCSS}>P1001</NavLink> | {' '}
        <NavLink to="/paramOne/1002/방자/12" className={isActiveCSS}>P1002</NavLink> | {' '}
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
