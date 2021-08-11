import React, { Component } from 'react'

export default class TodoList extends Component {


    state={
        name : ' '
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.props.update(this.state)
    }

    

    render() {
        return (
            <div>
                <center>
                <h1>TODO LIST</h1>
                <div>
                    <form onSubmit={(e)=>this.onSubmit(e)}>
                    <input
                    name='name'
                    value={this.state.name}
                    placeholder='Add to ToDo Task'
                    onChange={(e)=>this.onChange(e)}
                    />
                    <button type='submit'>ADD TODO</button>
                    </form>
                </div>
                <div>
                    
                </div>
                </center>
            </div>
        )
    }
}
