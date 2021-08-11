import React, { Component } from 'react'
import TodoList from './TodoList'

export default class App extends Component {

  state={
    name : []
  }
  update=(data)=>{
    this.setState({
      name : [...this.state.name,data]
    })
  }

  render() {
    return (
      <div>
        <TodoList
        update = {this.update}
        name = {this.state}
        />
      </div>
    )
  }
}
