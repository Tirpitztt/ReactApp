import * as React from "react";
import Users from "../Users";

import Preloader from "../../Common/Preloader/Preloader";



class UsersClas extends React.Component{

     componentDidMount() {
         this.props.getUsersThunk(this.props.state.users.currentPage,this.props.state.users.pageSize);
    }
    pageChange = (page)=>{
        this.props.getUsersThunk(page,this.props.state.users.pageSize);
    }
    followChange = (userId,flag)=>{
        if(!flag){
            this.props.followThunk(userId);
        }else {
            this.props.unfollowThunk(userId);
        }
     }
    render(){
        return(
            <>
                {this.props.state.users.isFetching?<Preloader />:<Users state={this.props.state} addNewUser={this.props.addNewUser} followChange={this.followChange} sCP={this.pageChange} />}

            </>

        )
    }
}

export default UsersClas;