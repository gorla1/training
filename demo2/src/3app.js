import React, { Component } from 'react'
import StudentSearch from './StudentSearch'

export default class App extends Component {
  state={
    name: '',
    data : [
      {
        name :"dinesh",
        score : 100,
        id : 1
      }, {
        name :"sumanth",
        score : 100,
        id : 2
      },
      {
        name :"praveen",
        score : 100,
        id : 3,
        
      },
      {
        name :"naik",
        score : 100,
        id : 4
      }
    ]
  
  } 
  
    render() {
      const {data} = this.state ; 
    return (
      <div>
        <StudentSearch
        studentData = {data}
        />
      </div>
    )
  }
}
