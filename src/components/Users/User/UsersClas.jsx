import * as React from "react";
import Users from "../Users";
import axios from "axios";


class UsersClas extends React.Component{

     componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.users.currentPage}&count=${this.props.state.users.pageSize}`)
            .then(response=>{
                this.props.setTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);

            })
    }
    pageChange = (page)=>{
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.state.users.pageSize}`)
            .then(response=>{
                this.props.setTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);

            })
    }
    render(){
        return(
            <Users state={this.props.state} addNewUser={this.props.addNewUser} followCh={this.props.followCh} sCP={this.pageChange}/>
        )
    }
}

export default UsersClas;