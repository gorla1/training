import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        const {r,g,b}= this.props
        return (
            <div>
                <center>
                    <div style={{backgroundColor:`rgb(${r},${g},${b})`,margin:'5px', width:'50%',height:'12rem'}}>
                    <h1>rgb({r},{g},{b})</h1>
                    </div>
                </center>
            </div>
        )
    }
}
