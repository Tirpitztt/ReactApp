import React from "react";
import {addP, getProfileThunk, txtCh} from "../../Redux/profile-reduce";
import {connect} from "react-redux";
import Profile from "./profile";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../HOC/withAuthRedirect";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!this.props.match.isExact) userId = this.props.state.navBar.user.id;
        this.props.getProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        state
    }
}



let redirectComponent = withAuthRedirect(ProfileContainer)
let urlDataComponent = withRouter(redirectComponent);

export default connect(mapStateToProps,{addP,txtCh,getProfileThunk}) (urlDataComponent);

