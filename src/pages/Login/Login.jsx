import React  from "react"
import "./Login.css"
import Hero from "../../components/Hero" 
import Form from "../../components/LoginForm"
var Login = () =>{
    return(    
    <React.Fragment>
        <div className="Main">
            <div className="Main__content">
                <Form></Form>
            </div>
            <Hero h={"88vh"}></Hero>
        </div>
    </React.Fragment>
    );
    
}

export default Login