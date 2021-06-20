import React from 'react'
import { useMyContext } from '../../../../context'
export default function ChildB() {
  const context = useMyContext()
  return (
    <div>
      <h3>我是B组件，我从祖组件接收到的lover是： </h3>
      <div>{JSON.stringify(context)}</div>
      <div>{context.name}</div>
      <div>{context.age}</div>
    </div>
  )
}
