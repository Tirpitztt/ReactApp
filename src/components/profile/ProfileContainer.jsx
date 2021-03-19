import React from "react";
import {addP, setUserProfile, txtCh} from "../../Redux/profile-reduce";
import {connect} from "react-redux";
import Profile from "./profile";
import axios from "axios";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.state.navBar.user.id;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response=>{
                //this.props.setFetching(false);
                this.props.setUserProfile(response.data);
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

