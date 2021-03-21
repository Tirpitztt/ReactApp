
import {connect} from "react-redux";
import Header from "./header";
import {setUserData} from "../../Redux/auth-reduce";
import * as React from "react";
import {authAPI} from "../../Api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe().then(data => {
                if(data.resultCode===0){
                    this.props.setUserData(data.data);
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