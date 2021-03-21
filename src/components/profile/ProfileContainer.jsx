import React from "react";
import {addP, setUserProfile, txtCh} from "../../Redux/profile-reduce";
import {connect} from "react-redux";
import Profile from "./profile";
import {withRouter} from "react-router";
import {usersAPI} from "../../Api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.state.navBar.user.id;
        usersAPI.getUserProfile(userId).then(data=>{
                //this.props.setFetching(false);
                this.props.setUserProfile(data);
                })
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
let urlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{addP,txtCh,setUserProfile}) (urlDataComponent);

