import React from "react"
import api from "../../libs/fetch";
import './Badges.css'
import SkeletonItem from "../../components/SkeletonItem"
import BadgesList from "../../components/BadgesList"
import Button from "../../components/Main_Button"
import PageError from "../../components/PageError"
class Badges extends React.Component{
    
    state={
        loading:true,
        error:null,
        data:undefined,
    }

    componentDidMount(){
        this.fetchData();
        if(this.state.data){
            this.Interval();
        }
        
    }

    fetchData = async() =>{
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.list()
            data.reverse()
            this.setState({loading:false, data:data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }
    
    Interval(){
        this.time = setInterval(this.fetchData, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.time)
    }

    render(){
        if(this.state.loading===true && !this.state.data){
            return <SkeletonItem></SkeletonItem>
        }

        if(this.state.error){
            return <PageError error={this.state.error.message}></PageError>
        }
        return(
            <React.Fragment>
                <div className="Badges__container">
                    <div className="Badges__button">
                        <Button
                        theme={"Button-light"}
                        contentText={"New Badge"}
                        Link={"/new"}
                        >
                        </Button>
                    </div>
                </div>
                <BadgesList badges={this.state.data}></BadgesList>
            </React.Fragment>
        );
        
    }
}

export default Badges;