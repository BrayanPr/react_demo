import React from 'react'
import Hero from "./Hero";
import "./style/DetailsUi.css";
import Badge from "./Badge"
const DetailsUi = props => {
    const badge = props.badge;

        return(
            <React.Fragment>
                <Hero h={"10vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            header_img_url = {badge.header_img_url}
                            profile_picture_url = {badge.profile_picture_url}
                            name = {badge.name}
                            age = {badge.age}
                            city = {badge.city}
                            followers = {badge.followers}
                            post = {badge.post}
                            likes = {badge.likes}>

                            </Badge>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

}

export default DetailsUi;