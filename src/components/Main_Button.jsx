import React from "react"
import "./style/Main_Button.css"
import {Link} from "react-router-dom"
const Button = props =>{
    return(
        <React.Fragment>
            <Link className="Main_Button" to={props.Link}> 
                <p>{props.contentText}</p>
            </Link>
        </React.Fragment>
    )
}

export default Button