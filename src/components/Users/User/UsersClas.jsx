import * as React from "react";
import Users from "../Users";
import axios from "axios";
import Preloader from "../../Common/Preloader/Preloader";
import { usersAPI} from "../../../Api/api";


class UsersClas extends React.Component{

     componentDidMount() {
         this.props.setFetching(true);
         usersAPI.getUsers(this.props.state.users.currentPage,this.props.state.users.pageSize)
            .then(data=>{
                this.props.setFetching(false);
                this.props.setTotalCount(data.totalCount);
                this.props.setUsers(data.items);

            })
    }
    pageChange = (page)=>{
        this.props.setCurrentPage(page);
        this.props.setFetching(true);
        usersAPI.getUsers(page,this.props.state.users.pageSize)
            .then(data=>{
                this.props.setFetching(false);
                this.props.setTotalCount(data.totalCount);
                this.props.setUsers(data.items);

            })
    }
    followChange = (userId,flag)=>{
        if(!flag){
            this.props.followingProgress(true);
            usersAPI.userFollow(userId).then(data=>{
                if(data.resultCode===0){
                    this.props.setUserFollow(userId);
                }
                this.props.followingProgress(false);
            })
        }else {
            this.props.followingProgress(true);
            usersAPI.userUnfollow(userId).then(data=>{
                if(data.resultCode===0){
                    this.props.setUserFollow(userId);
                }
                this.props.followingProgress(false);
             })
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