// npm i react-router-dom@6 react-router@6 react-spinners bootstrap

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Router 설정
// import 할 파일이 index.xxx 형태의 파일은 파일명 생략 가능
import { RouterProvider } from 'react-router-dom'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      }}
    ></RouterProvider>
  </React.StrictMode>
);

/*
React Router V7 설정
<RouterProvider router={router}
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }}
></RouterProvider>


v7_startTransition: true,
  라우터 전환 시 특정 작업을 준비하는 동안 UI가 계속 반응할 수 있게 해준다
  내부적으로 React의 startTransition API를 호출하여 전환 작업을 처리한다
  사용자 경험을 개선하고 UI의 부드러움을 향상시킨다
v7_relativeSplatPath: true,
  중첩된 라우트에서 절대 경로 대신 상대 경로를 사용할 수 있게 해준다
  라우트 구조를 더 직관적이고 유지보수하기 쉽게 만든다
  경로 매칭의 유연성을 높여준다
v7_fetcherPersist: true
  라우터 전환 시 이전 페이지의 데이터를 유지하여 성능을 향상시킨다
  페이지 간 이동 시 불필요한 데이터 재요청을 방지한다
  사용자 경험을 개선하고 서버 부하를 줄인다
v7_normalizeFormMethod: true
  폼에서 사용되는 HTTP 메서드(GET, POST, PUT, DELETE 등)를 일관된 형식으로 정규화한다
  예를 들어, 'post', 'POST', 'Post' 등 다양한 형태로 작성된 메서드를 동일하게 처리한다
  이를 통해 폼 처리의 안정성과 예측 가능성이 향상된다
v7_partialHydration: true
  하이드레이션(Hydration)은 서버에서 렌더링된 HTML을 클라이언트에서 React 컴포넌트로 활성화하는 과정
  v7_partialHydration을 활성화하면, 페이지의 모든 컴포넌트를 동시에 하이드레이션하지 않고, 필요한 부분만 선택적으로 하이드레이션할 수 있다
  이를 통해 초기 페이지 로딩 시간을 단축하고, 사용자 경험을 개선할 수 있다
v7_skipActionErrorRevalidation: true
  기본적으로 React Router는 액션 실행 후 자동으로 페이지의 데이터를 재검증한다다
  v7_skipActionErrorRevalidation이 true로 설정되면, 액션에서 에러가 발생했을 때 이 자동 재검증 과정을 건너뛴다다
  이는 특히 폼 제출과 같은 작업에서 에러가 발생했을 때 불필요한 데이터 로딩을 방지하여 성능을 향상시킬 수 있다
*/
