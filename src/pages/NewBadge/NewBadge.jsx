import React from 'react'
import Hero from "../../components/Hero";
import "./NewBadge.css";
import Badge from "../../components/Badge"
import Form from "../../components/Form"

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
        
    }

    render() {
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            Header = {this.state.form.Header || "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                            ProfilePic = {this.state.form.ProfilePic || "https://images.pexels.com/photos/5372800/pexels-photo-5372800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                            Name = {this.state.form.Name || "Maria"}
                            Age = {this.state.form.Age || "22"}
                            City = {this.state.form.City || "New York"}
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