import React  from "react"
import "./Register.css"
import Hero from "../../components/Hero" 
import Form from "../../components/RegisterForm"

class Register  extends React.Component{


    
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, error:null})
        this.props.history.push("/")
        
    }

    render(){
        return(    
            <React.Fragment>
                <div className="Main">
                    <div className="Main__content">
                        <Form
                        onSubmit={this.handleSubmit}></Form>
                    </div>
                    <Hero h={"88vh"}></Hero>
                </div>
            </React.Fragment>
            );
    }
    
}

export default Register