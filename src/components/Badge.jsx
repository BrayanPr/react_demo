import React from 'react'
import "./style/Badge.css"
import ProfilePic from "../images/no_image.png";
import HeaderBackground from "../images/HeaderBackgroundBadge.jpg";
class Badge extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5 flex-comlumn">
                    <div className="Badge__header">
                        <img src={HeaderBackground} alt="Header Background" />
                    </div>
                    <div className="container mt-5 mb1 Badge__userInfo">
                        <div className="Badge__userImage">
                            <img src={ProfilePic} alt="profile_pic" />
                        </div>
                        <h4 className="text-center mt-5">
                            Mike Miller <i>27</i>
                        </h4>
                        <p className="text-center">
                            New York City
                        </p>
                    </div>
                    
                    <div className="Badge__info container pt-3">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-center fw bold">5</h4>
                                <p className="text-center">followers</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">15</h4>
                                <p className="text-center">likes</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">20</h4>
                                <p className="text-center">pictures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Badge