import React, { Component } from 'react'

export default class SetState extends Component {
  state = {
    count: 0
  }
  increment = () => {
    // 1. 获取原来的状态值
    const {count} = this.state
    // 2. 更新状态
    // this.setState({count: count + 1}, () => {
    //   console.log(this.state.count)
    // })
    // console.log(this.state.count)

    this.setState((state, props) => {
      console.log(state, props)
      return {count: count + 1}
    })
    // this.setState(state => ({count: count + 1}))
  }
  render() {
    return (
      <div>
        <h1>SetState....组件</h1>
        <h2>当前求和为： {this.state.count}</h2>
        <button onClick={this.increment}>点我+1</button>
      </div>
    )
  }
}
