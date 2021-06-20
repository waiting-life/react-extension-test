import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import { MyProvider } from './context'


ReactDOM.render(
<MyProvider value={{name: 'w', age: 1}}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
</MyProvider>,
document.querySelector('#root'))