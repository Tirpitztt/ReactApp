
import {connect} from "react-redux";
import Header from "./header";
import {getUserData} from "../../Redux/auth-reduce";
import * as React from "react";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
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
export default connect(mapStateToProps,{getUserData})(HeaderContainer);