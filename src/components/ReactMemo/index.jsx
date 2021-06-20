import React, {useState, memo} from 'react'

export default function ReactMemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('cpp')
  const increment = () => {
    setCount(count+1)
  }
  const toggleName = () => {
    setName(name === 'cpp' ? 'cjz':'cpp')
  }
  console.log('parent组件渲染')
  return (
    <div>
      <h1>父组件的count为： {count}</h1>
      <h1>父组件的name为： {name}</h1>
      <button onClick={increment}>点击+1</button>
      <button onClick={toggleName}>点击改变name</button>
      <Child name={name}/>
    </div>
  )
}

const Child = memo((props) => {
  console.log('child子组件渲染')
  console.log(props)
  return (
    <div>
      <div>子组件</div>
      <h2>子组件从父组件接收到的name为：{props.name}</h2>
    </div>
  )
})



