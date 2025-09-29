// 프로젝트 전체에 대한 전역 설정
// Router 설정
// Store 설정
// 프로젝트 전체에서 사용할 CSS 관리
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 프로젝트 전체에서 사용할 통 CSS 파일
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 유지보수 측면에서 View를 분리해서 다른 파일에 정의 후 import
import App from './App.jsx'

// render => JSX 형태의 문법을 JavaScript 객체로 변환 (Babel, Esbuild)
createRoot(document.getElementById('root')).render(
  // StrictMode => 잘못된 사용법 등에 대한 경고 출력. Build하면 삭제된다.
  // JSX(View)를 반환하는 함수를 React에서는 사용자 정의 태그 형태로 사용
  // JSX => JavaScript XML
  <StrictMode>
    <App></App>
  </StrictMode>,
)
