import React from "react"
import "./style/Error.css";
import ErrorImg from "../images/404_error.png";
const Error404 = () => {
        return(
            <React.Fragment>
                <div className="error">
                    <img src={ErrorImg} alt="" />
                </div>
                
            </React.Fragment>
        )
    } 
export default Error404