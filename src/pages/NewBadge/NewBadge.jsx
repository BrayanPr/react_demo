import React from 'react'
import Hero from "../../components/Hero";
import "./NewBadge.css";
import Badge from "../../components/Badge"

class NewBadge extends React.Component {

    state = {
        loading:false,
        error:null,
        form:{
            ProfilePic:"",
            Name:"", 
            Age:"",
            City:"",
            Followers:"",
            Likes:"",
            Imagenes:"",
        }
    }


    render() {
        return(
            <React.Fragment>
                <Hero h={"15vh"}>
                    <div className="col">

                    <div className="col"></div>
                    </div>
                </Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                        ProfilePic = {this.state.form.ProfilePic || "https://images.pexels.com/photos/5372800/pexels-photo-5372800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                        ></Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge;