import React from 'react'
import SetState from './components/SetState'
import LazyLoad from './page/LazyLoad'
import ContextCom from './components/ContextCom'
import ReactMemo from './components/ReactMemo'
import RenderProps from './components/RenderProps'
import ErrorBoundary from './components/ErrorBoundary/Parent'
export default function App() {
  return (
    <div>
      <h1>App....组件</h1>
      <SetState/>
      <LazyLoad/>
      <ContextCom/>
      <ReactMemo/>
      <RenderProps/>
      <ErrorBoundary/>
    </div>
  )
}
