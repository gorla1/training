import React, { Component } from 'react'
import BoxColor from './BoxColor'

 class App extends Component {
  render() {
    return (
      <div>
        <center><h1>welcome</h1></center>
        
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

      </div>
    )
  }
}

export default App
