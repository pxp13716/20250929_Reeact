/*
  npm i bootstrap sweetalert2 react-router-dom@6 axios
  npm i @reduxjs/toolkit react-redux

  이전 npm i redux redux-thunk(redux-saga) react-redux
  대체 라이브러리 => npm i recoil 또는 zustand
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import { RouterProvider } from 'react-router-dom'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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

