// react-router는 6.4 버전부터 사용법이 확장
import { createBrowserRouter, Route } from 'react-router-dom';

import App from './../App';
import A01Currency from './../components/A01Currency';
import A02StateOne from './../components/A02StateOne';
import A02StateTwo from './../components/A02StateTwo';
import A03Navigate from './../components/A03Navigate';
import A04Navigate from './../components/A04Navigate';
import A05Props from './../components/A05Props';
import A06ParamsOne from './../components/A06ParamsOne';
import A06ParamsTwo from './../components/A06ParamsTwo';
import A07Location from './../components/A07Location';
import A07SearchParams from './../components/A07SearchParams';
import A08ChildComp from './../components/A08ChildComp';
import A08ChildOne from './../components/A08ChildOne';
import A08ChildTwo from './../components/A08ChildTwo';
import A09NotFound from './../components/A09NotFound';
import A10Exception from './../components/A10Exception';
import A10ErrorElem from './../components/A10ErrorElem';

// 브라우저의 주소줄에 패스와 매칭되는 값이 입력되면 지정된 component가
// 가장 가까운 패스에 있는 <Outlet> 태그에 표시된다 - App에 <Outlet> 기술

// 기술한 routes는 main.js에 등록부터 해야 한다.
const routes = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      { path: '/currency', element: <A01Currency /> },
      { path: '/state', element: <A02StateOne /> },
      { path: '/state/:id', element: <A02StateTwo /> },
      { path: '/navigate', element: <A03Navigate /> },
      { path: '/redirect', element: <A04Navigate /> },
      { path: '/props', element: <A05Props name="놀부" age={30} /> },
    ],
  },
]);
export default routes;
