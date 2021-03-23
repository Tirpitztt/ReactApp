
import {connect} from "react-redux";

import {addNewUser,setCurrentPage,followThunk,unfollowThunk,getUsersThunk} from "../../Redux/users-reduce";

import {withAuthRedirect} from "../HOC/withAuthRedirect";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";
import * as React from "react";

class UsersContainer extends React.Component{

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

let mapStateToProps = (state)=>{

    return {
        state:state
    }
}
let redirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps,
    {addNewUser,setCurrentPage,
    followThunk,unfollowThunk,getUsersThunk})(redirectComponent)

