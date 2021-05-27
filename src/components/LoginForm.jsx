import React from "react"
import "./style/LoginForm.css"
class Form extends React.Component{
    render(){
        return(
           <React.Fragment>
               <div className="Container m-5">
                   <form className="Form" onSubmit={this.props.onSubmit}>
                   <h1>Form</h1>
                       <div className="form-group mb-2">
                           <label className="mb-1"> email </label>
                           <input 
                           type="text" 
                           className="form-control"
                           name="Email"
                           />
                       </div>
                       <div className="form-group mb-2">
                           <label className="mb-1"> password </label>
                           <input 
                           type="text" 
                           className="form-control"
                           name="Password"
                           />
                       </div>
                       
                       <button type="submit" className="Submit">Save</button>
                   </form>
               </div>
           </React.Fragment>
        );
    }
}

export default Form