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
                            name="name"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.name}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Age </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="age"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.age}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> City </label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="city"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.city}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Profile picture URL</label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="profile_picture_url"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.profile_picture_url}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1"> Header picture URL</label>
                            <input 
                            type="text" 
                            className="form-control"
                            name="header_img_url"
                            onChange={this.props.onChange}
                            value={this.props.FormValues.header_img_url}
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