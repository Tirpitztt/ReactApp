import * as React from "react";
import Users from "../Users";
import axios from "axios";
import Preloader from "../../Common/Preloader/Preloader";
import { getUsers } from "../../../Api/api";


class UsersClas extends React.Component{

     componentDidMount() {
         this.props.setFetching(true);
        
            getUsers(this.props.state.users.currentPage,this.props.state.users.pageSize)
            .then(data=>{
                this.props.setFetching(false);
                this.props.setTotalCount(data.totalCount);
                this.props.setUsers(data.items);

            })
    }
    pageChange = (page)=>{
        this.props.setCurrentPage(page);
        this.props.setFetching(true);
        
            getUsers(page,this.props.state.users.pageSize)
            .then(data=>{
                this.props.setFetching(false);
                this.props.setTotalCount(data.totalCount);
                this.props.setUsers(data.items);

            })
    }
    followChange = (userId,flag)=>{
        if(!flag){
            this.props.setFetching(true);
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,null,{
                withCredentials:true,
                headers:{
                    'API-KEY': 'b9327212-b8d3-4fc5-a951-7732f4aa6fdd'
                }
            }).then(response=>{
                this.props.setFetching(false);
                if(response.data.resultCode===0){
                    this.props.setUserFollow(userId);
                }
                
            })
        }else {
            this.props.setFetching(true);
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{
                withCredentials:true,
                headers:{
                    'API-KEY': 'b9327212-b8d3-4fc5-a951-7732f4aa6fdd'
                }
            }).then(response=>{
                this.props.setFetching(false);
                if(response.data.resultCode===0){
                    this.props.setUserFollow(userId);
                }
                
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