import React, {useState, useEffect} from 'react'
import ChildA from './child/ChildA'

// 创建context对象

export default function ContextCom() { 
  const [lover, setLover] = useState({name: 'cpp', age: 0})
  useEffect(() => {
    setLover({name: 'cjz', age: 22})
  }, [])
  console.log(lover)
  return (
    <div>
      <h1>我是父组件</h1>
      <div>{lover.name} {lover.age}</div>
        <ChildA/>
    </div>
  )
}
