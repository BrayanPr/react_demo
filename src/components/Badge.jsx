import React from 'react'
import "./style/Badge.css"

class Badge extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5">
                    <div className="Badge__header">
                        <img src={this.props.header_img_url} alt="Header Background" />
                    </div>
                    <div className="Badge__userInfo container mt-5 mb1 ">
                        <div className="Badge__userImage">
                            <img src={this.props.profile_picture_url} alt="profile_pic" />
                        </div>
                        <h4 className="text-center mt-5">
                            {this.props.name} <i>{this.props.age}</i>
                        </h4>
                        <p className="text-center">
                            {this.props.city}
                        </p>
                    </div>
                    
                    <div className="Badge__info container pt-3">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.followers}</h4>
                                <p className="text-center">followers</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.likes}</h4>
                                <p className="text-center">likes</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">{this.props.post}</h4>
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