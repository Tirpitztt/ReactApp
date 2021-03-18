import React from "react";
import {addP, setUserProfile, txtCh} from "../../Redux/profile-reduce";
import {connect} from "react-redux";
import Profile from "./profile";
import axios from "axios";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps,{addP,txtCh,setUserProfile}) (ProfileContainer);

