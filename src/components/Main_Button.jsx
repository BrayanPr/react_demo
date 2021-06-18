import React from "react"
import "./style/Main_Button.css"
import {Link} from "react-router-dom"
const Button = props =>{
    return(
        <React.Fragment>
            <Link to={props.Link}> 
                <p className={props.theme}>{props.contentText}</p>
            </Link>
        </React.Fragment>
    )
}

export default Button