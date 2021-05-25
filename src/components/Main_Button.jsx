import React from "react"
import "./style/Main_Button.css"

const Button = props =>{
    return(
        <React.Fragment>
            <a className="Main_Button" href=""> 
                <p>{props.contentText}</p>
            </a>
        </React.Fragment>
    )
}

export default Button