import { Link, NavLink, Outlet } from 'react-router-dom';

const isActive = (props) => {
  console.log(props);
  return {}
};

function App() {
  return (
    <div className="m-3">
      <h1>React Router</h1>

      <div className="mb-3">
        <Link to="/">INDEX</Link> |&nbsp;
        <Link to="/currency">CURRENCY</Link> | {' '}

        <NavLink to="/state" style={isActive}>STATE ONE</NavLink> | {' '}
        <NavLink to="/state/100" style={isActive}>STATE TWO</NavLink> | {' '}
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
