import React from "react"
import './style/Hero.css'

const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__filter" style={{height:props.h}}></div>
                <div className="Hero__image" style={{height:props.h}}>
                    <img src="https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;