import c from './header.module.css';
import {connect} from "react-redux";
import Header from "./header";
import axios from "axios";
import {setUserData} from "../../Redux/auth-reduce";
import * as React from "react";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(response => {
                if(response.data.resultCode===0){
                    this.props.setUserData(response.data.data);
                }

            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}
let mapStateToProps = (state)=>{
    return {
        auth:state.authentication.isUserAuth,
        login:state.authentication.userName,
        userId:state.authentication.userId,
        userAva:state.navBar.user.avaurl
    }
}
export default connect(mapStateToProps,{setUserData})(HeaderContainer);