import React from 'react'
import "./style/Badge.css"

class Badge extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5">
                    <div className="Badge__header">
                        <img src={this.props.Header} alt="Header Background" />
                    </div>
                    <div className="Badge__userInfo container mt-5 mb1 ">
                        <div className="Badge__userImage">
                            <img src={this.props.ProfilePic} alt="profile_pic" />
                        </div>
                        <h4 className="text-center mt-5">
                            {this.props.Name} <i>{this.props.Age}</i>
                        </h4>
                        <p className="text-center">
                            {this.props.City}
                        </p>
                    </div>
                    
                    <div className="Badge__info container pt-3">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.Followers}</h4>
                                <p className="text-center">followers</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.Likes}</h4>
                                <p className="text-center">likes</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.Pictures}</h4>
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