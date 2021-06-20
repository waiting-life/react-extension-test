import React from 'react'
import './index.css'
export default function Parent() {
  return (
    <div className="parent">
      <h1>我是parent组件</h1>
      <A render = {(name) => <B name={name}/>}>
        <div>Hello</div>
        <B/>
      </A>
    </div>
  )
}

function A(props) {
  console.log(props)
  const name = 'cpp'
  return (
    <div className="a">
      <h2>我是A组件</h2>
      {props.render(name)}
    </div>
  )
}

function B(props) {
  return (
    <div className="b">
      <h3>我是B组件, {props.name}</h3>
    </div>
  )
}