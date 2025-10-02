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
// import A07Location from './../components/A07Location';
// import A07SearchParams from './../components/A07SearchParams';
import A08ChildComp from './../components/A08ChildComp';
import A08ChildOne from './../components/A08ChildOne';
import A08ChildTwo from './../components/A08ChildTwo';
import A09NotFound from './../components/A09NotFound';
import A10Exception from './../components/A10Exception';
import A10ErrorElem from './../components/A10ErrorElem';
import { Component } from 'react';

// 브라우저의 주소줄에 패스와 매칭되는 값이 입력되면 지정된 component가
// 가장 가까운 패스에 있는 <Outlet> 태그에 표시된다 - App에 <Outlet> 기술

// 기술한 routes는 main.js에 등록부터 해야 한다.
const routes = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <A10ErrorElem />,
    children: [
      { path: '/currency', element: <A01Currency /> },
      { path: '/state', element: <A02StateOne /> },
      { path: '/state/:id', element: <A02StateTwo /> },
      { path: '/navigate', element: <A03Navigate /> },
      { path: '/redirect', element: <A04Navigate /> },

      { path: '/props', element: <A05Props name="놀부" age={30} /> },

      /*
        패스를 이용한 값 전달 - 가장 많이 사용된다
        /패스/:id/:name/:no와 같이 ":"이 없는 값은 고정 패스
        /:XX => 가변패스 - 어떤 값이 와도 상관없다 (패스와 변수 역할을 한다)
        /paramOne/1001/놀부/11 => A06ParamsOne 컴포넌트에서 { id: '1001', name: '놀부', no:'11'} 형태가 된다
      */
      { path: '/paramOne/:id/:name/:no', element: <A06ParamsOne /> },
      { path: '/paramTwo/*', element: <A06ParamsTwo /> },

      // path가 매칭되지 않은 경우 기본 값으로 표시할 컴포넌트 지정 - 위치는 상관없다
      /*
        1. 기본 패스 (/:XX) 형태가 없는 패스 등록
        2. path/:XX
        3. path/*
        4. *
      */
      { path: '*', element: <A09NotFound /> },

      // 주소줄에 path?key=value&key=value 형태의 파라메터 값 추출
      // Link에서 값 전달
      // { path: '/location', element: <A07Location /> },
      {
        path: '/location', lazy: async () => {
          try {
            const module = await import('./../components/A07Location');
            console.log(module)
            return { Component: module.default }
          } catch {
            console.error('컴포넌트를 로드할 수 없습니다')
            return { Component: () => <A10ErrorElem /> }
          }
        }
      },
      // { path: '/search', element: <A07SearchParams /> },
      {
        path: '/search', lazy: async () => {
          try {
            const module = await import('./../components/A07SearchParams');
            console.log(module)
            return { Component: module.default }
          } catch {
            console.error('컴포넌트를 로드할 수 없습니다')
            return { Component: () => <A10ErrorElem /> }
          }
        }
      },

      // 하위 라우터 등록
      // A08ChildComp 컴포넌트에는 <Outlet>이 정의 되어야 한다
      {
        path: '/child', element: <A08ChildComp />, children: [
          // { path: '/child', element: <A08ChildOne /> },
          { index: true, element: <A08ChildOne /> },
          { path: '/child/two', element: <A08ChildTwo /> },
          { path: 'three', element: <h3>Three</h3> },
        ]
      },

      // { path: '/exception/:id', element: <A10Exception />, errorElement: <A10ErrorElem /> },
      // 부모 요소에 할당하면 하위 컴포넌트의 모든 에러를 잡아 처리한다
      { path: '/exception/:id', element: <A10Exception /> },

      // loader, action 리퍼런스 참조...
    ],
  },
]);
export default routes;
