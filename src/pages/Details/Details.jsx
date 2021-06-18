import React from 'react'
import DetailsUi from '../../components/DetailsUi'
import api from '../../libs/fetch'
import PageError from "../../components/PageError"
import Loader from "../../components/Loader"

class Details extends React.Component{
    
    state = {
        loading: false, 
        error: null,
        data:{},
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try{
            const data = await api.badges.read(this.props.match.params.BadgeId);
            this.setState({loading: false, data:data});
        }catch(e){
            this.setState({loading:false, error:e})
        }
    } 
    
    render() {
        if(this.state.loading){
            return(
                <Loader></Loader>
            )
        }
        if(this.state.error){
            return(
                <PageError error={this.state.error.message}></PageError>
            )
        }
        return(
            <DetailsUi badge={this.state.data}></DetailsUi>
        )
    }
}

export default Details