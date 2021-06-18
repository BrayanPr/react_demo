import React from 'react'
import Hero from "../../components/Hero";
import "./NewBadge.css";
import Badge from "../../components/Badge"
import Form from "../../components/NewBadgeForm"
import api from '../../libs/fetch';
import PageError from "../../components/PageError"
import Loader from "../../components/Loader"
class NewBadge extends React.Component {

    state = {
        loading:false,
        error:null,
        form:{
            header_img_url:"",
            profile_picture_url:"",
            name:"", 
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
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
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/badges")
        }catch(error){
            this.setState({loading:false, error: error})
        }
    }

    render() {
        if(this.state.loading){
            return(
                <Loader></Loader>
            )
        }
        if(this.state.error){
            return(
                <PageError></PageError>
            )
        }
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            header_img_url = {this.state.form.header_img_url || "https://i.pinimg.com/originals/55/f4/eb/55f4eb45819c90449bd02f84548104c1.jpg"}
                            profile_picture_url = {this.state.form.profile_picture_url || "https://img.icons8.com/windows/452/no-user.png"}
                            name = {this.state.form.name || "Name Lastname"}
                            age = {this.state.form.age || "Age"}
                            city = {this.state.form.city || "City"}
                            followers = {this.state.form.followers || "0"}
                            post = {this.state.form.post || "0"}
                            likes = {this.state.form.likes || "0"}>

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