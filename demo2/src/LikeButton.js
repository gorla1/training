import React, { Component } from 'react'

export default class LikeButton extends Component {

    state={
        count:0,
        color:"blue"
    }

    handleFunction=()=>{
        const Arr = ['purple','blue','green','yellow','orange','red']
        const newColor = Arr[Math.floor(Math.random()*6)]
        this.setState({
            count:this.state.count+1,
            color : newColor
        })
    }
    render() {
        return (
            <div>
                <center>
                    <button onClick={this.handleFunction} style={{backgroundColor:this.state.color,marginTop:'20%',width:'20%'}}><h1>{this.state.count} likes</h1></button>
                </center>
            </div>
        )
    }
}
