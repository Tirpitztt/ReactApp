
import {connect} from "react-redux";

import {addNewUser,setCurrentPage,followThunk,unfollowThunk,getUsersThunk} from "../../Redux/users-reduce";
import UsersClas from "./User/UsersClas";


let mapStateToProps = (state)=>{

    return {
        state:state
    }
}

export const UsersContainer = connect(mapStateToProps,
    {addNewUser,setCurrentPage,
    followThunk,unfollowThunk,getUsersThunk})(UsersClas)
