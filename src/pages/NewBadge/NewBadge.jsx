import React from 'react'
import Hero from "../../components/Hero";
import "./NewBadge.css";
import Badge from "../../components/Badge"
import Form from "../../components/Form"
import DefaultProfilePic from "../../images/no_image.png";
class NewBadge extends React.Component {

    state = {
        loading:false,
        error:null,
        form:{
            Header:"",
            ProfilePic:"",
            Name:"", 
            Age:"",
            City:"",
            Followers:"",
            Likes:"",
            Pictures:"",
        }
    }

    handleChange = event => {
        this.setState({
            form:{
                ... this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            Header = {this.state.form.Header || "https://i.pinimg.com/originals/55/f4/eb/55f4eb45819c90449bd02f84548104c1.jpg"}
                            ProfilePic = {this.state.form.ProfilePic || DefaultProfilePic}
                            Name = {this.state.form.Name || "Name Lastname"}
                            Age = {this.state.form.Age || "Age"}
                            City = {this.state.form.City || "City"}
                            Followers = {this.state.form.Followers || "0"}
                            Pictures = {this.state.form.Pictures || "0"}
                            Likes = {this.state.form.Likes || "0"}>

                            </Badge>
                        </div>
                        <div className="col">
                            <Form 
                            FormValues={this.state.form}
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                            ></Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge;