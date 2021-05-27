import React from "react"
import "./style/NewBadgeForm.css"
class Form extends React.Component{
     render(){
         return(
            <React.Fragment>
                
                <div className="form m-5">
                
                    <form className="BadgeForm" onSubmit={this.props.onSubmit}>
                    <h1>Form</h1>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Name </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="Name"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.Name}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Age </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="Age"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.Age}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> City </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="City"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.City}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Profile picture URL</label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="ProfilePic"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.ProfilePic}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Header picture URL</label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="Header"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.Header}
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