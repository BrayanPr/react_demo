import React from "react"
import "./style/RegisterForm.css"
class Form extends React.Component{
    render(){
        return(
           <React.Fragment>
               <div className="Container m-5">
                   <form className="RegisterForm row" onSubmit={this.props.onSubmit}>
                   <h1>Register</h1>
                       <div className="col">
                       <div className="form-group mb-3">
                           <label className="mb-1"> Email </label>
                           <input 
                           type="email" 
                           className="form-control"
                           name="Email"
                           />
                       </div>
                       <div className="form-group mb-2">
                           <label className="mb-1"> Full name </label>
                           <input 
                           type="text" 
                           className="form-control"
                           name="Name"
                           />
                       </div>
                       <div className="form-group mb-2">
                           <label className="mb-1"> City </label>
                           <input 
                           type="text" 
                           className="form-control"
                           name="City"
                           />
                       </div>
                       </div>

                        <div className="col">                       <div className="form-group mb-2">
                           <label className="mb-1"> Age </label>
                           <input 
                           type="text" 
                           className="form-control"
                           name="Age"
                           />
                       </div>
                       <div className="form-group mb-2">
                           <label className="mb-1"> Password </label>
                           <input 
                           type="password" 
                           className="form-control"
                           name="Password"
                           />
                       </div>
                       <div className="form-group mb-2">
                           <label className="mb-1"> Repeat password </label>
                           <input 
                           type="password" 
                           className="form-control"
                           name="Password"
                           />
                       </div></div>
                       <button type="submit" className="Submit">Save</button>
                   </form>
               </div>
           </React.Fragment>
        );
    }
}

export default Form