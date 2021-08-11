  
import React, { Component } from 'react'

 export default class StudentSearch extends Component {
   state = {
       query : ''
   }
   updateQuery(e){
       
       this.setState({
           query : e.target.value
       })
   }
   render(){
       const {studentData} = this.props
       const {query}=this.state;
       const showStudent = studentData.filter((student)=> student.name.toLowerCase().includes(query.toLowerCase()))
       
       return (
           <div>
               <center>
                   <input value={query} placeholder="Search Student" onChange={(e)=>this.updateQuery(e)}/>
               </center>
                <div className="row">
                    <div className="col-8 m-auto">
                        <div className="card">
                            {
                                showStudent.map((data)=>{
                                    return(
                                        <div className=" card-body d-flex align-content-center justify-content-between " key={data.id}>
                                            <h4>{data.name}</h4>
                                            <p>{data.score}</p>
                                            <button className="btn btn-sm btn-primary ">View</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}