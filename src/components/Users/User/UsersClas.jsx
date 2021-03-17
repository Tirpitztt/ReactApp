import * as React from "react";
import Users from "../Users";
import axios from "axios";


class UsersClas extends React.Component{

     componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response=>{
                this.props.setUsers(response.data.items);
            })
    }

    render(){
        return(
            <Users state={this.props.state} addNewUser={this.props.addNewUser} followCh={this.props.followCh}/>
        )
    }
}

export default UsersClas;