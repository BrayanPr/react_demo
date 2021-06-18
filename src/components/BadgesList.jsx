import React from "react"
import "./style/BadgesList.css"
import {Link} from "react-router-dom"
class BadgesListItem extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="BadgesListItem mt-5">
                    <div className="col-4">
                        <div className="Item__profilePicture">
                            <img src={this.props.badge.profile_picture_url} alt="Profile Picture" />
                        </div>
                        <div className="Item__background">
                            <img src={this.props.badge.header_img_url} alt="Profile Picture" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="row">
                            <h4 className="text-center mt-3">
                                {this.props.badge.name} <i>{this.props.badge.age}</i>
                            </h4>
                            <p className="text-center">{this.props.badge.city}</p>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }

}
 
class BadgedList extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="cointainer List mb-5">
                    <div className="list-unstyled">
                        {this.props.badges.map( (badge)=>{
                            return(
                            <div key={badge._id} id={badge._id}>
                                <Link className="text-reset text-decoration-none" to={`/${badge._id}`}>
                                    <BadgesListItem badge={badge}></BadgesListItem>
                                </Link>
                                
                            </div>
                            )
                        } )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgedList;